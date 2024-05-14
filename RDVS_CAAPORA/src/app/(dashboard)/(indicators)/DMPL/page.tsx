"use client";
import { TabelaMatriz } from "@/components/dashboardComponents/TableMatriz";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td
} from "@chakra-ui/react";
import React from "react";


interface PivotTableProps {
  data: Array<{
    Nivel1: string;
    Nivel2: string;
    CategoryName: string;
    SubcategoryName: string;
    valor: number;
  }>;
}

const PivotTable: React.FC<PivotTableProps> = ({ data }) => {
  // Aqui você implementaria a lógica para transformar `data` em uma estrutura adequada para renderização

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nível 1</Th>
          <Th>Nível 2</Th>
          <Th>Categoria</Th>
          <Th>Subcategoria</Th>
          <Th>Valor</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index}>
            <Td>{item.Nivel1}</Td>
            <Td>{item.Nivel2}</Td>
            <Td>{item.CategoryName}</Td>
            <Td>{item.SubcategoryName}</Td>
            <Td>{item.valor}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};



type DataRow = {
  id: string;
  descrição: string | JSX.Element;
  [key: string]: any; // Para permitir os meses dinamicamente
  Total: number;
  isExpanded: boolean;
  subRows?: DataRow[];
};

type DescriptionItem = {
  descrição: string | JSX.Element;
  subRows?: DescriptionItem[];
  finalValues?: { [month: string]: number }; // Mapeia cada mês a um valor específico
};

function createDataStructure(
  months: string[],
  descriptions: DescriptionItem[],
  startId: number = 1
): DataRow[] {
  const createRow = (description: DescriptionItem, id: number): DataRow => {
    const row: DataRow = {
      id: `${id}`,
      descrição: description.descrição,
      Total: 0,
      isExpanded: false,
    };

    if (!description.subRows || description.subRows.length === 0) {
      // No último nível, use finalValues para definir os valores mensais
      months.forEach(month => {
        row[month] = description.finalValues ? description.finalValues[month] : 0;
        row.Total += row[month];
      });
    } else {
      // Não é o último nível, então crie subRows e some os valores
      const subRows = createDataStructure(months, description.subRows, id * 10 + 1);
      months.forEach(month => {
        row[month] = subRows.reduce((acc, subRow) => acc + subRow[month], 0);
        row.Total += row[month];
      });
      row.subRows = subRows;
    }

    return row;
  };

  return descriptions.map((description, index) => createRow(description, startId + index));
}

// Exemplo de uso com valores finais distintos para cada mês
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const descriptionsReceitaOperacional: DescriptionItem[] = [
  {
    descrição: 'Receita Operacional',
    subRows: [
      {
        descrição: 'Venda Produção',
        subRows: [
          {
            descrição: 'Category name',
            subRows: [
              {
                descrição: "Subcategory name",
                subRows: [
                  {
                    descrição: <InitialFocus />,
                    finalValues: { Jan: 100, Fev: 110, Mar: 120, Abr: 130, Mai: 140, Jun: 150, Jul: 160, Ago: 170, Set: 180, Out: 190, Nov: 200, Dez: 210 }

                  }
                ]
              }
            ]
          },
        ]
      },
      {
        descrição: 'Impostos S/ Receita',
        subRows: [
          {
            descrição: 'Category name',
            subRows: [
              {
                descrição: "Subcategory name",
                subRows: [
                  {
                    descrição: <InitialFocus />,
                    finalValues: { Jan: 100, Fev: 110, Mar: 120, Abr: 130, Mai: 140, Jun: 150, Jul: 160, Ago: 170, Set: 180, Out: 190, Nov: 200, Dez: 210 }
                  }
                ]
              }
            ]
          },
        ]
      }
    ]
  }
];

const receitaOperacional = createDataStructure(months, descriptionsReceitaOperacional);

type Column = {
  label: string;
  key: string;
};

const columns: Column[] = [
  { label: "+/-", key: "toggle" },
  // { label: "ID", key: "id" },
  { label: "Descrição", key: "descrição" },
  { label: "Jan", key: "Jan" },
  { label: "Fev", key: "Fev" },
  { label: "Mar", key: "Mar" },
  { label: "Abr", key: "Abr" },
  { label: "Mai", key: "Mai" },
  { label: "Jun", key: "Jun" },
  { label: "Jul", key: "Jul" },
  { label: "Ago", key: "Ago" },
  { label: "Set", key: "Set" },
  { label: "Out", key: "Out" },
  { label: "Nov", key: "Nov" },
  { label: "Dez", key: "Dez" },
  { label: "Total", key: "Total" },
];




const custo = [
  {
    id: "1",
    descrição: "Custo",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 900,
    isExpanded: false,
    subRows: [{
      id: "12",
      descrição: "Category name",
      Jan: 300,
      Fev: 300,
      Mar: 300,
      Total: 900,
      isExpanded: false,
      subRows: [{
        id: "13",
        descrição: "Subcategory name",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "14",
          descrição: <InitialFocus />,
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          // subRows: [{}],
        }],
      }],
    }],
  }
]

const despesasOperacionais = [
  {
    id: "1",
    descrição: "Despesa Operacional",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 900,
    isExpanded: false,
    subRows: [
      {
        id: "11",
        descrição: "Despesas com diretores",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "112",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "113",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "114",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Outras Receitas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Outras Despesas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Despesas com RH",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Despesas Comerciais",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Despesas Administrativas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Despesas de Funcionamento",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Serviços Profissionais",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Impostos e Taxas",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Frota",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Investimentos",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
    ]
  }
]

const despesasIndedutivel = [
  {
    id: "1",
    descrição: "Despesa Indedutivel",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 900,
    isExpanded: false,
    subRows: [{
      id: "12",
      descrição: "Category name",
      Jan: 300,
      Fev: 300,
      Mar: 300,
      Total: 900,
      isExpanded: false,
      subRows: [{
        id: "13",
        descrição: "Subcategory name",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "14",
          descrição: <InitialFocus />,
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          // subRows: [{}],
        }],
      }],
    }],
  }
]

const resultadoFinanceiro = [
  {
    id: "1",
    descrição: "Resultado Financeiro",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Total: 900,
    isExpanded: false,
    subRows: [
      {
        id: "11",
        descrição: "Receitas Financeiras",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "112",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "113",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "114",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      },
      {
        id: "12",
        descrição: "Despesas Financeiras",
        Jan: 300,
        Fev: 300,
        Mar: 300,
        Total: 900,
        isExpanded: false,
        subRows: [{
          id: "122",
          descrição: "Category name",
          Jan: 300,
          Fev: 300,
          Mar: 300,
          Total: 900,
          isExpanded: false,
          subRows: [{
            id: "123",
            descrição: "Subcategory name",
            Jan: 300,
            Fev: 300,
            Mar: 300,
            Total: 900,
            isExpanded: false,
            subRows: [{
              id: "124",
              descrição: <InitialFocus />,
              Jan: 300,
              Fev: 300,
              Mar: 300,
              Total: 900,
              isExpanded: false,
              // subRows: [{}],
            }],
          }],
        }],
      }
    ]
  }
]

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
    Jan: "10%",
    Fev: "20%",
    Mar: "30%",
    Total: "100%",
    isExpanded: false,
    // subRows: [{}],
  },
];

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

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} bg={'transparent'}>Person name</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}

      >
        <ModalOverlay />
        <ModalContent sx={{ 'max-width': '1500px' }}>
          <ModalHeader>Detalhes de Pesron Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} >
            <TableContainer>
              <Table variant='simple'>
                <TableCaption>Outras Informações Person Name</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Payment date</Th>
                    <Th>Bank count name</Th>
                    <Th>Farm name</Th>
                    <Th>Crop name</Th>
                    <Th>Doc number</Th>
                    <Th>Price paid</Th>
                    <Th>Notes</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>A Prazo</Td>
                    <Td>BANCO BRASIL 72.963</Td>
                    <Td>Agrop. Caaporã</Td>
                    <Td>Ano Agrícola 21/22</Td>
                    <Td>9627</Td>
                    <Td isNumeric>894.83</Td>
                    <Td>Venda 13,76 SC Milho R$ 75,00 Fazenda taruma</Td>
                  </Tr>
                  <Tr>
                    <Td>A Prazo</Td>
                    <Td>BANCO BRASIL 72.963</Td>
                    <Td>Agrop. Caaporã</Td>
                    <Td>Ano Agrícola 21/22</Td>
                    <Td>9627</Td>
                    <Td isNumeric>894.83</Td>
                    <Td>Venda 13,76 SC Milho R$ 75,00 Fazenda taruma</Td>
                  </Tr>
                  <Tr>
                    <Td>A Prazo</Td>
                    <Td>BANCO BRASIL 72.963</Td>
                    <Td>Agrop. Caaporã</Td>
                    <Td>Ano Agrícola 21/22</Td>
                    <Td>9627</Td>
                    <Td isNumeric>894.83</Td>
                    <Td>Venda 13,76 SC Milho R$ 75,00 Fazenda taruma</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Payment date</Th>
                    <Th>Bank count name</Th>
                    <Th>Farm name</Th>
                    <Th>Crop name</Th>
                    <Th>Doc number</Th>
                    <Th>Price paid</Th>
                    <Th>Notes</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const PageDRE_RuralProducer = () => {
  return (
    <Box p={3}>
      <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
        DRE SSCROP
      </Heading>

      <Box bg={"white"}>
        <Heading color={"teal"} mt={5} fontSize={"x-large"}>
          RECEITAS OPERACIONAIS
        </Heading>
        <TabelaMatriz data={receitaOperacional} columns={columns} resultTable={false} />
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

      <Box bg={"white"} mt={5}>
        <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
          CUSTO DE MERCADORIAS VENDIDAS (CMV)
        </Heading>
        <TabelaMatriz data={custo} columns={columns} resultTable={false} />
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

        <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
          DESPESAS OPERACIONAIS
        </Heading>
      <Box bg={"white"} mt={5}>
        <TabelaMatriz data={despesasOperacionais} columns={columns} resultTable={false} />
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

        <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
          DESPESAS INDEDUTIVEL
        </Heading>
      <Box bg={"white"} mt={5}>
        <TabelaMatriz data={despesasIndedutivel} columns={columns} resultTable={false} />
      </Box>

        <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
          RESULTADO FINANCEIRO
        </Heading>
      <Box bg={"white"} mt={5}>
        <TabelaMatriz data={resultadoFinanceiro} columns={columns} resultTable={false} />
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

export default PageDRE_RuralProducer;