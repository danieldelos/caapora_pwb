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
  Select,
} from "@chakra-ui/react";
import EditDelete from "../ActionEditDelete";
import { css } from '@emotion/react';
import "react-toastify/dist/ReactToastify.css";

const TableBalancete = ({ headerTable, footerTable, itensTable, title, deleteUser, deleteCompanie, deleteCrop, deleteHarvest, deletePlot, optionSelect }: any) => {
  const size = 100 / (Object.keys(headerTable[0]).length + 1)
  const tableSize = css`table-layout: fixed; width: 100%;`
  const columnSize = css`width: ${size};`

  return (
    <TableContainer mt={"2%"} css={tableSize} maxH="830px" overflowY="scroll">
      <Table variant="striped" colorScheme="teal">
        <Thead textAlign={"center"}>
          <Tr textAlign={"center"}>
            {headerTable &&
              headerTable.map((elem: any) => {
                return Object.values(elem).map((columnValue: any) => (
                  <Th key={columnValue}>{columnValue}</Th>
                ));
              })}
            <Th textAlign={"center"}>Conta Padrão</Th>
            {/* <Th textAlign={"center"}>Ações</Th> */}
            {/* Adicione a coluna de seleção aqui */}
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
                {/* Adicione o Select aqui */}
                <Td textAlign={"center"} css={[columnSize, { margin: "auto" }]}>
                  <Select placeholder="Selecione" size='md' w={'70%'}>
                    {optionSelect.map((option: any) => (
                      <option key={option.id} value={option.id}>
                        {`${option.code} - ${option.description}`}
                      </option>
                    ))}
                  </Select>
                </Td>
                {/* <Td textAlign={"center"} css={[columnSize, { margin: "auto" }]}>
                  <EditDelete
                    title={title}
                    id={item.item1}
                    name={item.item2}
                    deleteUser={deleteUser}
                    deleteCompanie={deleteCompanie}
                    deleteCrop={deleteCrop}
                    deleteHarvest={deleteHarvest}
                    deletePlot={deletePlot}
                  />
                </Td> */}
              </Tr>
            ))}
        </Tbody>
        {/* ... (rodapé existente) */}
      </Table>
    </TableContainer>
  );
};

export default TableBalancete;


