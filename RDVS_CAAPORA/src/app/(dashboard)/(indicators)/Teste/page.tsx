"use client"
import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { TreeNode } from 'primereact/treenode';
import { dataDRE } from './NodeService';

export default function ColGroupDemo() {

    const jan: any = dataDRE.filter(item => item["mouth"] === "jan" && item["description"] === "Venda Produção").reduce((acc, item) => acc + item["Price_paid"], 0)

    const totalTitle = (external_id: any) => {
        return dataDRE.filter(item => item["mouth"] === "jan" && item["external_id"] === external_id).reduce((acc, item) => acc + item["Price_paid"], 0)
    }
    const totalCategory = (Category_name: any) => {
        return dataDRE.filter(item => item["mouth"] === "jan" && item["Category_name"] === Category_name).reduce((acc, item) => acc + item["Price_paid"], 0)
    }

    const totalSubCategory = (external_id: any, subcategory: any) => {
        return dataDRE.filter(item => item["mouth"] === "jan" && item["external_id"] === external_id && item["Subcategory_name"] === subcategory).reduce((acc, item) => acc + item["Price_paid"], 0)
    }

    const bodyTable = (external_id: any) => {
        const uniqueCategoryData = dataDRE
            .filter(item => item["external_id"] === external_id && item["mouth"] === "jan") // Filtra itens de Venda Produção
            .reduce((accumulator, current) => {
                // Verifica se a categoria já foi adicionada ao acumulador
                if (!accumulator.some((item: { [x: string]: any; }) => item['Category_name'] === current['Category_name'])) {
                    accumulator.push(current); // Adiciona ao acumulador se ainda não foi incluído
                }
                return accumulator;
            }, [])
            .map((item: { [x: string]: any; }, index: any) => ({  // Mapeia para a estrutura de dados desejada
                key: `0-0-${index}`,
                data: {
                    brand: item['Category_name'],
                    jan: totalCategory(item['Category_name']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
                    fev: '',
                    mar: '',
                    abr: '',
                },
                children: bodyTableSub(item['Category_name'])
            }));

        // const uniqueSubCategoryData = dataDRE
        //     .filter(item => item["external_id"] === external_id && item["mouth"] === "jan") // Filtra itens de Venda Produção
        //     .reduce((accumulator: { [x: string]: any; }[], current: { [x: string]: any; }) => {
        //         // Verifica se a categoria já foi adicionada ao acumulador
        //         if (!accumulator.some((item: { [x: string]: any; }) => item['Category_name'] === current['Category_name'])) {
        //             accumulator.push(current); // Adiciona ao acumulador se ainda não foi incluído
        //         }
        //         return accumulator;
        //     }, [])
        //     .map((item: { [x: string]: any; }, index: any) => ({  // Mapeia para a estrutura de dados desejada
        //         key: `0-0-${index}`,
        //         data: {
        //             brand: item['Subcategory_name'],
        //             jan: totalSubCategory(item['external_id'], item['SubCategory_name']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
        //             fev: '',
        //             mar: '',
        //             abr: ''
        //         }
        //     }));
        return uniqueCategoryData
    }

    const bodyTableSub = (Category_name: any) => {
        const uniqueSubCategoryData = dataDRE
            .filter(item => item["Category_name"] === Category_name && item["mouth"] === "jan") // Filtra itens de Venda Produção
            .reduce((accumulator, current) => {
                // Verifica se a categoria já foi adicionada ao acumulador
                if (!accumulator.some((item: { [x: string]: any; }) => item['Subcategory_name'] === current['Subcategory_name'])) {
                    accumulator.push(current); // Adiciona ao acumulador se ainda não foi incluído
                }
                return accumulator;
            }, [])
            .map((item: { [x: string]: any; }, index: any) => ({  // Mapeia para a estrutura de dados desejada
                key: `0-0-${index}`,
                data: {
                    brand: item['Subcategory_name'],
                    jan: totalSubCategory(item['external_id'], item['Subcategory_name']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
                    fev: '',
                    mar: '',
                    abr: ''
                }
            }));

            return uniqueSubCategoryData
    }

    const nodes: TreeNode[] = [
        {
            key: '0',
            data: {
                brand: 'Receita Operacional', jan: totalTitle('1.1').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
                fev: '',
                mar: '',
                abr: ''
            },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Venda Produção', jan: totalTitle('1.1').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(), fev: '', mar: '', abr: '' },
                    children: bodyTable('1.1'),
                },
            ]
        },
        {
            key: '1',
            data: { brand: 'Impostos S/ Receita', jan: totalTitle('Impostos S/ Receita').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(), fev: '', mar: '', abr: '' },
            children: bodyTable('Impostos S/ Receita')
        },
        {
            key: '2',
            data: { brand: 'Receita Líquida', jan: (totalTitle('Venda Produção') - totalTitle('Impostos S/ Receita')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(), fev: '', mar: '', abr: '' },
        },
        {
            key: '3',
            data: {
                brand: 'Custo', jan: (totalTitle('Custo').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
                fev: '',
                mar: '',
                abr: ''
            },
            children: bodyTable('Custo')
        },

        {
            key: '4',
            data: {
                brand: 'Receita - Custo', jan: (totalTitle('Venda Produção') - totalTitle('Impostos S/ Receita') - totalTitle('Custo')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
                fev: '',
                mar: '',
                abr: ''
            },
        },

        {
            key: '5',
            data: {
                brand: 'Margem %', jan: ((totalTitle('Venda Produção') - totalTitle('Impostos S/ Receita') - totalTitle('Custo')) / totalTitle('Venda Produção')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(),
                fev: '',
                mar: '',
                abr: ''
            },
        },

        {
            key: '6',
            data: { brand: 'Despesas/Receitas Operacionais', jan: totalTitle('Despesas com diretores'), fev: '', mar: '', abr: '' },
            children:
                [
                    // {
                    //     key: '0-0',
                    //     data: { brand: 'Despesas com diretores', jan: totalTitle('Despesas com diretores'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Despesas com diretores'),
                    // },
                    // {
                    //     key: '0-1',
                    //     data: { brand: 'Despesas com RH', jan: totalTitle('Despesas com RH'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Despesas com RH'),
                    // },
                    // {
                    //     key: '0-2',
                    //     data: { brand: 'Despesas Comerciais', jan: totalTitle('Despesas Comerciais'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Despesas Comerciais'),
                    // },
                    // {
                    //     key: '0-3',
                    //     data: { brand: 'Despesas Administrativas', jan: totalTitle('Despesas Administrativas'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Despesas Administrativas'),
                    // },
                    // {
                    //     key: '0-4',
                    //     data: { brand: 'Despesas de Funcionamento', jan: totalTitle('Despesas de Funcionamento'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Despesas de Funcionamento'),
                    // },
                    // {
                    //     key: '0-5',
                    //     data: { brand: 'Serviços Profissionais', jan: totalTitle('Serviços Profissionais'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Serviços Profissionais'),
                    // },
                    // {
                    //     key: '0-6',
                    //     data: { brand: 'Impostos e Taxas', jan: totalTitle('Impostos e Taxas'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Impostos e Taxas'),
                    // },
                    // {
                    //     key: '0-7',
                    //     data: { brand: 'Frota', jan: totalTitle('Frota'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Frota'),
                    // },
                    // {
                    //     key: '0-8',
                    //     data: { brand: 'Investimentos', jan: totalTitle('Investimentos'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Investimentos'),
                    // },
                    // {
                    //     key: '0-9',
                    //     data: { brand: 'Outras Receitas', jan: totalTitle('Outras Receitas'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Outras Receitas'),
                    // },
                    // {
                    //     key: '0-10',
                    //     data: { brand: 'Outras Despesas', jan: totalTitle('Outras Despesas'), fev: '', mar: '', abr: '' },
                    //     children: bodyTableSub('Outras Despesas'),
                    // },
                ]
        },
        {
            key: '7',
            data: { brand: 'EBTIDA', jan: "Ver calculo", fev: '', mar: '', abr: '' },
        },
        {
            key: '8',
            data: { brand: 'EBITIDA Margem %', jan: "ver calculo", fev: '', mar: '', abr: '' },
        },
        {
            key: '9',
            data: { brand: 'Despesa indedutível', jan: totalTitle('Despesa indedutível').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim(), fev: '', mar: '', abr: '' },
            children: bodyTable('Despesa indedutível')
        },
        {
            key: '10',
            data: { brand: 'Resultado Financeiro', jan: totalTitle('Venda Produção'), fev: '', mar: '', abr: '' },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Receitas Financeiras', jan: totalTitle('Venda Produção'), fev: '', mar: '', abr: '' },
                    children: bodyTable('Venda Produção'),
                },
                {
                    key: '0-1',
                    data: { brand: 'Despesas Financeiras', jan: totalTitle('Venda Produção'), fev: '', mar: '', abr: '' },
                    children: bodyTable('Venda Produção'),
                },
            ]
        },
        {
            key: '11',
            data: { brand: 'Resultado Líquido', jan: "Ver calculo", fev: '', mar: '', abr: '' },
        },
        {
            key: '12',
            data: { brand: '% Margem Líquida', jan: "Ver calculo", fev: '', mar: '', abr: '' },
        },

    ];

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Contas" rowSpan={12} />
            </Row>
            <Row>
                <Column header="Jan" />
                <Column header="Fev" />
                <Column header="Mar" />
                <Column header="Abr" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Total:" colSpan={1} />
                <Column footer={(totalTitle('Venda Produção') + totalTitle('Impostos S/ Receita')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'code' }).replace('BRL', '').trim()} />
                <Column footer="" />
                <Column footer="" />
                <Column footer="" />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" expander />
                <Column field="jan" />
                <Column field="fev" />
                <Column field="mar" />
                <Column field="abr" />
            </TreeTable>
        </div>
    )
}

