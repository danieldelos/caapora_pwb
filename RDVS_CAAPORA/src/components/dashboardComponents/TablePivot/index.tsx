"use client"
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { TreeNode } from 'primereact/treenode';
import { Flex, Select } from '@chakra-ui/react';
import ModalTable from '../ModalTable';

interface ColumnMeta {
  field: string;
  header: string;
}

function convertDataToJsonTreeNodes(data: any[]) {
  function aggregateChildData(children: any) {
    return children.reduce((acc: any, child: any) => {
      Object.keys(child.data).forEach(key => {
        // Considera apenas os campos dos meses para soma
        if (key !== 'name' && key !== 'Total') {
          acc[key] = (acc[key] || 0) + child.data[key];
        }
      });
      acc.Total = (acc.Total || 0) + child.data.Total; // Soma o total dos filhos
      return acc;
    }, {});
  }

  return data.map(item => {
    const children: any = item.children ? convertDataToJsonTreeNodes(item.children) : null 
    let childAggregates: any = {};
    if (children && children.length > 0) {
      childAggregates = aggregateChildData(children);
    }

    // Calcula o total para o item atual, somando todos os valores dos meses
    const total: any = Object.keys(item.data).reduce((acc, key) => {
      if (key !== 'name' && key !== 'Total') {
        return acc + item.data[key];
      }
      return acc;
    }, 0);

    const itemData = {
      name: item.data.name,
      ...item.data,
      ...childAggregates,
      Total: childAggregates.Total ? childAggregates.Total : total // Usa o total dos filhos se houver, senão usa o total calculado
    };

    return {
      key: item.key,
      data: itemData,
      children: children
    };
  });
}


export default function TablePivotComponent({ itensTable, optionView, typeColumn, ano, mes, fazenda, safra }: any) {


  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<ColumnMeta[]>(typeColumn);

  useEffect(() => {
    // Substitua isso pelo seu método de carregamento de dados
    const treeNodes = convertDataToJsonTreeNodes(itensTable);
    setNodes(treeNodes);
    // console.log(treeNodes[0].children[0].children[0].children[0].children[0].data.name)
  }, [optionView, typeColumn]);

  const onColumnToggle = (event: MultiSelectChangeEvent) => {
    const selectedColumns = event.value;
    const orderedSelectedColumns = typeColumn.filter((col: { field: string; }) =>
      selectedColumns.some((sCol: { field: string; }) => sCol.field === col.field)
    );
    console.log(orderedSelectedColumns)
    setVisibleColumns(orderedSelectedColumns);
  };

  interface City {
    name: string;
    code: string;
}

  const [selectedFazenda, setSelectedFazenda] = useState<City | null>(null);
  const [selectedAno, setSelectedAno] = useState<City | null>(null);
  const [selectedMes, setSelectedMes] = useState<City | null>(null);
  const [selectedSafra, setSelectedSafra] = useState<City | null>(null);

  const header = (
    // <MultiSelect
    //   value={visibleColumns}
    //   options={typeColumn}
    //   onChange={onColumnToggle}
    //   optionLabel="header"
    //   className="w-full sm:w-16rem"
    //   display="chip"
    // />
    <Flex justify={'space-around'} gap={5}>
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedFazenda} onChange={(e: MultiSelectChangeEvent) => setSelectedFazenda(e.value)} options={fazenda} optionLabel="name" 
                placeholder="Selecione a Fazenda" maxSelectedLabels={3} className="w-full md:20rem" />
        </div>

        <div className="card flex justify-content-center">
            <MultiSelect value={selectedAno} onChange={(e: MultiSelectChangeEvent) => setSelectedAno(e.value)} options={ano} optionLabel="name" 
                placeholder="Selecione o ano" maxSelectedLabels={3} className="w-full md:20rem" />
        </div>
        
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedMes} onChange={(e: MultiSelectChangeEvent) => setSelectedMes(e.value)} options={mes} optionLabel="name" 
                placeholder="Selecione o mes" maxSelectedLabels={3} className="w-full md:20rem" />
        </div>

        <div className="card flex justify-content-center">
            <MultiSelect value={selectedSafra} onChange={(e: MultiSelectChangeEvent) => setSelectedSafra(e.value)} options={safra} optionLabel="name" 
                placeholder="Selecione a safra" maxSelectedLabels={3} className="w-full md:20rem" />
        </div>

    </Flex>
  );


  const personNameBodyTemplate = (node:any) => {
    // Garanta que você está acessando o campo `data` do node corretamente
    const rowData = node.data;
    // Verifique se `isPersonName` existe e é true
    if (rowData.name === "Person Name") {
      return <ModalTable />; // Certifique-se de que ModalTable é um componente válido
    } else {
      // Certifique-se de que o valor padrão é retornado corretamente
      return rowData.name || 'N/A'; // Use 'N/A' ou um valor padrão adequado
    }
  };
  
  return (
    <div className="card">
      <TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Contas" body={personNameBodyTemplate} expander style={{ width: '300px' }} />
        {visibleColumns.map(col => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </TreeTable>
    </div>
  );
}