"use client";
import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tfoot,
  Tr,
  IconButton,
} from "@chakra-ui/react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillTrademarkCircle,
} from "react-icons/ai";
import React, { useState, ReactNode } from "react";

type RowData = {
  descrição: ReactNode;
  id: string;
  name?: string;
  conta?: string;
  details?: string;
  Jan?: number;
  Total?: number;
  subRows?: RowData[];
};

type Column = {
  label: string;
  key: string;
};

export const TabelaMatriz: React.FC<{
  data: any[];
  columns: Column[];
  resultTable: any;
}> = ({ data, columns, resultTable }) => {
  const [expandedRows, setAllExpanded] = useState<string[]>([]);

  const toggleRow = (id: string) => {
    setAllExpanded((prevState) =>
      prevState.includes(id)
        ? prevState.filter((rowId) => rowId !== id)
        : [...prevState, id]
    );
  };

  const toggleAllRows = () => {
    if (expandedRows.length) {
      setAllExpanded([]); // Recolhe todos os itens
    } else {
      const allIds = data.map((row: RowData) => row.id);
      setAllExpanded(allIds); // Expande todos os itens
    }
  };

  const computeColumnSum = (key: string): number => {
    return data.reduce((sum: any, row: any) => sum + (row[key] || 0), 0);
  };

  const testIcon: any = resultTable;
  const renderRow = (row: any, paddingLeft = 0) => {
    return (
      <React.Fragment key={row.id}>
        <Tr>
          {columns.map((col) => (
            <Td key={col.key} width="10%">
              {col.key === "toggle" && row.subRows && (
                <IconButton
                  bg={"transparent"}
                  aria-label="Expand row"
                  icon={
                    expandedRows.includes(row.id) ? (
                      <AiFillMinusCircle />
                    ) : (
                      <AiFillPlusCircle />
                    )
                  }
                  onClick={() => toggleRow(row.id)}
                  style={{ marginLeft: paddingLeft }}
                />
              )}
              {col.key !== "toggle" && col.key === "descrição" ? (
                <div
                  style={{
                    maxWidth: "60ch", // Define o número máximo de caracteres
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={row[col.key]} // Adiciona o texto completo como título para o tooltip
                >
                  {row[col.key]}
                </div>
              ) : (
                col.key !== "toggle" && row[col.key]
              )}
            </Td>
          ))}
        </Tr>
        {row.subRows &&
          expandedRows.includes(row.id) &&
          row.subRows.map((subRow: any) => renderRow(subRow, paddingLeft + 20))}
      </React.Fragment>
    );
  };

  return (
    <Box overflowX="auto" borderRadius={5}>
      <Table variant="striped" colorScheme="teal" borderRadius={5}>
        <Thead borderRadius={5}>
          <Tr borderRadius={5}>
            {columns.map((col) => (
              <Th
                key={col.key}
                width={"5px"}
                bg={resultTable ? "teal" : "none"}
                color={resultTable ? "white" : "none"}
              >
                {col.key === "toggle" ? (
                  <IconButton
                    bg={"transparent"}
                    aria-label="Toggle all rows"
                    icon={
                      resultTable ? (
                        <AiFillTrademarkCircle bg={"teal"} color={"white"} />
                      ) : expandedRows.length ? (
                        <AiFillMinusCircle />
                      ) : (
                        <AiFillPlusCircle />
                      )
                    }
                    onClick={toggleAllRows}
                  />
                ) : (
                  col.label
                )}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{data && data.map((row) => renderRow(row))}</Tbody>
        {/* <Tfoot display={resultTable ? 'none' : 'show'}>
          <Tr>
            {columns.map((col) => (
              <Td key={col.key}>
                {["Jan", "Fev", "Mar", "Total"].includes(col.key) &&
                  computeColumnSum(col.key)}
              </Td>
            ))}
          </Tr>
        </Tfoot> */}
      </Table>
    </Box>
  );
};

export default TabelaMatriz;
