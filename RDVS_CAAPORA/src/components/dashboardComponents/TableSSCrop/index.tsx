"use client";
import { companieContext } from "@/context/companieContext";
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
import { css } from '@emotion/react';
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { FaCheck } from 'react-icons/fa';

const TableSScrop = ({ headerTable, itensTable, optionSelect, idFromTo }: any) => {
  const { addFromTo, updateFromTo }: any = useContext(companieContext);
  const { register, formState: { errors } } = useForm({ mode: "all" });

  const size = 100 / (Object.keys(headerTable[0]).length + 1);
  const tableSize = css`table-layout: fixed; width: 100%;`;
  const columnSize = css`width: ${size};`;

  const [idsFromTo, setIdsFromTo] = useState<any>({});

  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number }>({});
  const handleSelectChange = async (rowIndex: number, event: React.ChangeEvent<HTMLSelectElement>, data: any) => {
    const selectedOption = event.target.value;   
    const description = optionSelect.filter((descr: any) => descr.id === Number(selectedOption))[0].description;
    const type = selectedOption;
    const combination = itensTable[rowIndex];
    console.log(description)
    const formData = [
      {
        "description": description,
        "type": type,
        "data": {
          "combination": combination
        }
      }];

      if (idsFromTo.hasOwnProperty(rowIndex)) {
        console.log(idsFromTo)
        alert(idsFromTo)
        // Se já existir um ID, chame a função updateFromTo com o ID
        await updateFromTo({ ...formData, id: idsFromTo[rowIndex] });
      } else {
        // Caso contrário, chame a função addFromTo e adicione o ID retornado ao estado
        const responseId = await addFromTo(formData);  // Supondo que addFromTo retorna um ID
        setIdsFromTo((prev: any) => ({
          ...prev,
          [rowIndex]: responseId
        }));
      }
    };

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
                <Td {...register(`${rowIndex}.contaPadrao`)} textAlign={"center"} css={[columnSize, { margin: "auto" }]}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Select
                      placeholder="Selecione"
                      size='md'
                      w={'70%'}
                      onChange={(event) => handleSelectChange(rowIndex, event, item)}
                      // value={selectedOptions[rowIndex]}
                    >
                      {optionSelect.map((option: any) => (
                        <option key={option.id} value={option.id}>
                          {`${option.code} - ${option.description}`}
                        </option>
                      ))}
                    </Select>
                    {selectedOptions[rowIndex] && <FaCheck style={{ marginLeft: '10px' }} />}
                  </div>
                  {
                    errors[`${rowIndex}.contaPadrão`] && (<span style={{ color: "red" }}>{'erro'}</span>)
                  }
                </Td>
              </Tr>
            ))}
        </Tbody>
        {/* ... (rodapé existente) */}
      </Table>
    </TableContainer>
  );
};

export default TableSScrop;

