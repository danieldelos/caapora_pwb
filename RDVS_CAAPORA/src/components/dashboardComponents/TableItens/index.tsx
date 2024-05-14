"use client";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import EditDelete from "../ActionEditDelete";
import { css } from '@emotion/react';
import "react-toastify/dist/ReactToastify.css";

const TableItens = ({ headerTable, footerTable, itensTable, title, deleteUser, deleteCompanie, deleteCrop, deleteHarvest, deletePlot }: any) => {
  const size = 100/(Object.keys(headerTable[0]).length + 1)

  const tableSize = css`table-layout: fixed; width: 100%;`
  const columnSize = css`width: ${size};`
  
  return (
    <TableContainer mt={"2%"} css={tableSize}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Lista de {title}</TableCaption>
        <Thead textAlign={"center"}>
          <Tr textAlign={"center"}>
            {headerTable &&
              headerTable.map((elem: any) => {
                return Object.values(elem).map((columnValue: any) => (
                  <Th key={columnValue}>{columnValue}</Th>
                ));
              })}
            <Th textAlign={"center"}>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {itensTable &&
            itensTable.map((item: any, rowIndex: any) => (
              <Tr key={rowIndex} textAlign={"left"}>
                {Object.values(item).map((columnValue: any, colIndex: any) => (
                  <Td
                    css={columnSize}
                    textAlign={"left"}
                    key={colIndex}
                    isNumeric={typeof columnValue === "number"}
                  >
                    {columnValue}
                  </Td>
                ))}
                <Td textAlign={"center"} css={columnSize}>
                   <EditDelete title={title} id={item.item1} 
                               name={item.item2} 
                               deleteUser={deleteUser} 
                               deleteCompanie={deleteCompanie} 
                               deleteCrop={deleteCrop} 
                               deleteHarvest={deleteHarvest} 
                               deletePlot={deletePlot}/>
                </Td>
                <Td textAlign={"center"} css={columnSize}>
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Tr>
            {footerTable &&
              footerTable.map((elem: any) => {
                return Object.values(elem).map((columnValue: any) => (
                  <Th key={columnValue}>{columnValue}</Th>
                ));
              })}
            <Th textAlign={"center"}>Ações</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableItens;
