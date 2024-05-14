"use client";
import { TabelaMatriz } from "@/components/dashboardComponents/TableMatriz";
import {
  Box,
  Heading,
  Select,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
} from "@chakra-ui/react";

type RowData = {
  id: string;
  name: string;
  conta: string;
  details: string;
  valor: number;
  subRows?: RowData[];
};

type Column = {
  label: string;
  key: string;
};

type ColumnTableMatriz = {
  label: string;
  key: string;
  isTitle: any;
};

const columns: Column[] = [
  { label: "+/-", key: "toggle" },
  // { label: "ID", key: "id" },
  { label: "Descrição", key: "descrição" },
  { label: "Jan", key: "Jan" },
  { label: "Fev", key: "Fev" },
  { label: "Mar", key: "Mar" },
  { label: "Total", key: "Total" },
];

const columnsTableMatriz: ColumnTableMatriz[] = [
  { label: "+/-", key: "toggle", isTitle: true },
  // { label: "ID", key: "id", isTitle: true},
  { label: "Descrição", key: "descrição", isTitle: true },
  { label: "Jan", key: "Jan", isTitle: false },
  { label: "Fev", key: "Fev", isTitle: false },
  { label: "Mar", key: "Mar", isTitle: false },
  { label: "Total", key: "Total", isTitle: false },
];

const tableRceitas: any[] = [
  {
    id: "1",
    descrição: "Receita Oper.",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 900,
    isExpanded: false,
    subRows: [
      {
        id: "1.1",
        descrição: "Receita Bruta",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        subRows: [
          {
            id: "1.1.1",
            descrição: "Feijão em Grãos",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.2",
            descrição: "Lenha de Eucalipto",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.3",
            descrição: "Milho em Grãos",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.4",
            descrição: "Soja em Grãos",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.5",
            descrição: "Sorgo em Grãos",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.6",
            descrição: "Venda de Sementes",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.7",
            descrição: "Venda de Insumos",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
        ],
      },
      {
        id: "1.2",
        descrição: "Imposots S/ Receita",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        subRows: [
          {
            id: "1.2.1",
            descrição: "ICMS",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.2.2",
            descrição: "PIS",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.2.3",
            descrição: "COFINS",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.2.4",
            descrição: "ISSQN",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.2.5",
            descrição: "Outros Impostos",
            Jan: 200,
            Fev: 300,
            Mar: 300,
            Total: 150,
            isExpanded: false,
            // subRows: [{}],
          },
        ],
      },
    ],
  },
];

const tableReceitaLiquida: any[] = [
  {
    id: "1",
    descrição: "Receita Líquida",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableCMV: any[] = [
  {
    id: "1",
    descrição: "Custo",
    Jan: 200,
    Fev: 300,
    Mar: 300,
    Total: 150,
    isExpanded: false,
    subRows: [
      {
        id: "1.1",
        descrição: "Abertura de Area",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.2",
        descrição: "Compra Sementes",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.3",
        descrição: "Adjuvantes",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.4",
        descrição: "ARMAZENAGEM",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.5",
        descrição: "Arrendamentos e Aluguéis",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.6",
        descrição: "Biologico",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.7",
        descrição: "Combustíveis",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.9",
        descrição: "Corretivo Solo",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.10",
        descrição: "Defensivos",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.11",
        descrição: "Despesas Ambientais",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.12",
        descrição: "Despesas Fazenda",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.13",
        descrição: "Fertilizantes",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.14",
        descrição: "Foliares",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.15",
        descrição: "Fretes",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.16",
        descrição: "Fungicidas",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.17",
        descrição: "Herbicidas",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.18",
        descrição: "Inseticidas",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.19",
        descrição: "Seguros",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.20",
        descrição: "Sementes",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
    ],
  },
];

const tableResultadoLiquido: any[] = [
  {
    id: "1",
    descrição: "Receita - custo",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "% Margem Bruta",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableDespesas: any[] = [
  {
    id: "1",
    descrição: "Despesas",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    subRows: [
      {
        id: "1.1",
        descrição: "Despesas c/ diretores",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.2",
        descrição: "Despesas c/ RH",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.3",
        descrição: "Despesas de Funcionamento",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.4",
        descrição: "Serviços Profissionais",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.5",
        descrição: "Impostos e Taxas",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.6",
        descrição: "Frota",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.6",
        descrição: "Investimentos",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.7",
        descrição: "Despesa indedutivel",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.8",
        descrição: "Outras Rec/Desp",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 150,
        isExpanded: false,
        subRows: [
          {
            id: "1.1",
            descrição: "Outras Receitas",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            subRows: [
              {
                id: "1.1.1",
                descrição: "Outras receitas com emprestimos",
                Jan: 300,
                Fev: 300,
                Mar: 300,
                Total: 300,
                isExpanded: false,
                // subRows: [{}],
              },
              {
                id: "1.1.2",
                descrição: "Outras receitas Diversas",
                Jan: 300,
                Fev: 300,
                Mar: 300,
                Total: 300,
                isExpanded: false,
                // subRows: [{}],
              },
            ],
          },
          {
            id: "1.2",
            descrição: "Outras Despesas",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            subRows: [
              {
                id: "1.2.1",
                descrição: "Outras Despesas com emprestimos",
                Jan: 300,
                Fev: 300,
                Mar: 300,
                Total: 300,
                isExpanded: false,
                // subRows: [{}],
              },
              {
                id: "1.2.2",
                descrição: "Outras Despesas Diversas",
                Jan: 300,
                Fev: 300,
                Mar: 300,
                Total: 300,
                isExpanded: false,
                // subRows: [{}],
              },
            ],
          },
        ],
      },
    ],
  },
];

const tableOutrasRceitas: any[] = [
  {
    id: "1",
    descrição: "Rec/Desp",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    subRows: [
      {
        id: "1.1",
        descrição: "Outras Receitas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        subRows: [
          {
            id: "1.1.1",
            descrição: "Outras receitas com emprestimos",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.1.2",
            descrição: "Outras receitas Diversas",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            // subRows: [{}],
          },
        ],
      },
      {
        id: "1.2",
        descrição: "Outras Despesas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        subRows: [
          {
            id: "1.2.1",
            descrição: "Outras Despesas com emprestimos",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            // subRows: [{}],
          },
          {
            id: "1.2.2",
            descrição: "Outras Despesas Diversas",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            // subRows: [{}],
          },
        ],
      },
    ],
  },
];

const tableLucroPreFinan: any[] = [
  {
    id: "1",
    descrição: "Lucro Operacional",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: true,
    subRows: [
      {
        id: "1.2.2",
        descrição: "Outras Despesas Diversas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        // subRows: [{}],
      },
    ],
  },
  {
    id: "2",
    descrição: "% Margem Operacional",
    Jan: "10%",
    Fev: "20%",
    Mar: "30%",
    Total: "100%",
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableLucroPreFinanEbitida: any[] = [
  {
    id: "1",
    descrição: "EBITDA",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "% Margem EBTIDA",
    Jan: "10%",
    Fev: "20%",
    Mar: "30%",
    Total: "100%",
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableReultadoFinan: any[] = [
  {
    id: "1",
    descrição: "Resultado Financeiro",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    subRows: [
      {
        id: "1.1",
        descrição: "Receitas Financeiras",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        subRows: [
          {
            id: "1.1.1",
            descrição: "Outras Rec. financeiras",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            // subRows: [{}],
          },
        ],
      },
      {
        id: "1.2",
        descrição: "Despesas Financeiras",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        subRows: [
          {
            id: "1.1.1",
            descrição: "Outras Rec. financeiras",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 300,
            isExpanded: false,
            // subRows: [{}],
          },
        ],
      },
    ],
  },
];

const tableLucroPosFinan: any[] = [
  {
    id: "1",
    descrição: "Resultado antes do IRPJ/CSLL",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "% Resultado Antes Dos Impostos",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableImpostos: any[] = [
  {
    id: "1",
    descrição: "Impostos",
    Jan: 0,
    Fev: 0,
    Mar: 0,
    Total: 0,
    isExpanded: false,
    subRows: [
      {
        id: "1.1",
        descrição: "Imposto de Renda - IR",
        Jan: 200,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        // subRows: [{}],
      },
      {
        id: "1.2",
        descrição: "Contribuição Social - CSLL",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 300,
        isExpanded: false,
        // subRows: [{}],
      },
    ],
  },
];

tableImpostos[0].Jan = tableImpostos[0].subRows.reduce(
  (sum: any, row: any) => sum + row.Jan,
  0
);
tableImpostos[0].Fev = tableImpostos[0].subRows.reduce(
  (sum: any, row: any) => sum + row.Fev,
  0
);
tableImpostos[0].Mar = tableImpostos[0].subRows.reduce(
  (sum: any, row: any) => sum + row.Mar,
  0
);
tableImpostos[0].Total = tableImpostos[0].subRows.reduce(
  (sum: any, row: any) => sum + row.Total,
  0
);

const tableLucroExerc: any[] = [
  {
    id: "1",
    descrição: "Resultado Líquido",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 300,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "% Margem Líquida",
    Jan: "10%",
    Fev: "20%",
    Mar: "30%",
    Total: "100%",
    isExpanded: false,
    // subRows: [{}],
  },
];



const PageDRE = () => {
  return (
    <Box p={3}>
      <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
        DRE
      </Heading>
      <Flex gap={2} bg={"white"} p={5} mb={5}>
        <Select placeholder="Fazenda">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Safra">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Talhão">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Cultura">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Input placeholder="Quantidade em Toneladas" />
      </Flex>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
        RECEITAS OPERACIONAIS
      </Heading>
      <Box bg={"white"}>
        <TabelaMatriz
          data={tableRceitas}
          columns={columns}
          resultTable={false}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        RECEITA LÍQUIDA
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableReceitaLiquida}
          columns={columns}
          resultTable={true}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        CUSTO DE MERCADORIAS VENDIDAS (CMV)
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz data={tableCMV} columns={columns} resultTable={false} />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        MARGEM BRUTA
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableResultadoLiquido}
          columns={columns}
          resultTable={true}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        DESPESAS OPERACIONAIS
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableDespesas}
          columns={columns}
          resultTable={false}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        RESULTADO OPERACIONAL (EBIT)
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableLucroPreFinan}
          columns={columns}
          resultTable={true}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        EBITDA
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableLucroPreFinanEbitida}
          columns={columns}
          resultTable={true}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        RESULTADO FINANCEIRO
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableReultadoFinan}
          columns={columns}
          resultTable={false}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        RESULTADO ANTES DO IRPJ/CSLL
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableLucroPosFinan}
          columns={columns}
          resultTable={true}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        IMPOSTOS SOBRE O LUCRO LÍQUIDO
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableImpostos}
          columns={columns}
          resultTable={false}
        />
      </Box>

      <Heading color={"teal"} mb={"5"} fontSize={"x-large"} mt={"5"}>
        RESULTADO LÍQUIDO DO EXERCÍCIO
      </Heading>
      <Box bg={"white"} mt={"20px"}>
        <TabelaMatriz
          data={tableLucroExerc}
          columns={columns}
          resultTable={true}
        />
      </Box>
    </Box>
  );
};

export default PageDRE;
