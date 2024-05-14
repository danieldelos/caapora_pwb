
import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Box, Button, Skeleton, Spinner, Stack } from '@chakra-ui/react';
import { companieContext } from '@/context/companieContext';

export default function TableImport() {
    const { listImpotsBalance, imports, deleteImport, temp }: any = useContext(companieContext)
    useEffect(() => { listImpotsBalance() }, [temp]);

    const DeleteImport = (data: any) => {
        return (
            // <Button colorScheme='red' onClick={() => console.log('Delete', data.id)}>
            <Button colorScheme='red' onClick={() => deleteImport(data.id)}>
                Delete
            </Button>
        );
    };

    if (imports === undefined ) {
        return (
            <Stack mt={5}>
                <Skeleton height='50px' />
                <Skeleton height='300px' />
            </Stack>
        )
    }

    const AddbtnDelete = imports.map((elem: any) => {
        return {
            ...elem,
            btn: DeleteImport(elem)
        }
    })

    const noDelete = AddbtnDelete.filter((elem: any) => { return elem.status !== "delete" })

    return (
        <Box mt={5}>
            <div className="card">
                <DataTable value={noDelete} paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="file_name" header="Nome"></Column>
                    <Column field="import_type" header="Tipo"></Column>
                    <Column field="created_at" header="Data"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column field="id" header="ID"></Column>
                    <Column field="btn" header="Ações" body={(data) => data.btn}></Column>
                </DataTable>
            </div>
        </Box>
    );
}
