import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { companieContext } from "@/context/companieContext";
import { useContext } from "react";
import { Button, Flex, FormControl, Select, filter } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export default function TablePaginator() {
    const { balance, idFromTo }: any = useContext(companieContext)
    const [itensTable, setItensTable] = useState<any>([])
    const { register, handleSubmit, watch } = useForm();

    useEffect(() => {
        if (balance.length > 0 && balance[0].typesAccount) {
            // Mapear o array original para adicionar a nova propriedade em cada objeto
            const updatedItems = balance[0].combinationsFile.map((item: any, index: any) => {
                return {
                    ...item,
                    selectFromTo:
                        <IndividualForm
                            item={item}
                            index={index}
                            typesAccount={balance[0].typesAccount}
                            itensTable={itensTable}
                            setItensTable={setItensTable}
                        />,
                };
            });
            // Atualizar o estado com o novo array
            setItensTable(updatedItems);
        }
    }, [balance, idFromTo]);


    function IndividualForm({ item, index, typesAccount, itensTable, setItensTable }: any) {
        const { addFromTo, idFromTo }: any = useContext(companieContext)
        const { register, handleSubmit } = useForm();

        const onSubmit = (data: any) => {
            const selectData = JSON.parse(data.selectFromTo);
            console.log(`Data from index ${index}:`, selectData);
            console.log(JSON.stringify(data))

            const payload = {
                description: selectData.description,
                type: selectData.external_id, ///pode usar o alias, o code ou ID
                data: {
                    combination: {
                        doc_type_name: selectData.doc_type_name,
                        category_name: selectData.category_name,
                        subcategory_name: selectData.subcategory_name
                    }
                }
            }

            addFromTo(payload)
            // Atualizar itensTable aqui conforme necessário
            // const newItems = itensTable.map((it: any, idx: any) => idx === index ? { ...it, ...payload } : it);
            // setItensTable(newItems);
            console.log(itensTable)
        };

        return (
            <FormControl key={index}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex gap={3}>
                        {typesAccount ? (
                            <Select placeholder='Selecione uma conta' {...register(`selectFromTo`)}>
                                {typesAccount.map((elem: any) => (
                                    <option key={elem.code} value={JSON.stringify({ ...item, ...elem, linha: index })}>
                                        {elem.code} - {elem.description}
                                    </option>
                                ))}
                            </Select>
                        ) : (
                            <p>Carregando contas...</p> // ou algum outro indicador de carregamento
                        )}
                        <Button type='submit' colorScheme="blue">Enviar</Button>
                        <Button colorScheme="blue" onClick={handleEdit}>editar</Button>
                    </Flex>
                </form>
            </FormControl>
        );
    }


    const handleEdit = () => {
        console.log(idFromTo)
    }

    return (
        <div className="card">
            <DataTable value={itensTable} paginator rows={9} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="doc_type_name" header="DOC TYPE NAME" style={{ width: '20%' }}></Column>
                <Column field="category_name" header="CATEGORY NAME" style={{ width: '20%' }}></Column>
                <Column field="subcategory_name" header="SUBCATEGORY NAME" style={{ width: '20%' }}></Column>
                <Column field="type" header="TYPE" style={{ width: '5%' }}></Column>
                <Column field="" header="ID" style={{ width: '5%' }}></Column>
                <Column field="selectFromTo" header="CONTA PADRÃO" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
