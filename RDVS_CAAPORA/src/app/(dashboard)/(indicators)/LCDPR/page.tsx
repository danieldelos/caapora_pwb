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
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useState } from 'react';

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
  // { label: "+/-", key: "toggle" },
  // { label: "ID", key: "id" },
  { label: "Descrição", key: "descrição" },
  { label: "Jan", key: "Jan" },
  { label: "Fev", key: "Fev" },
  { label: "Mar", key: "Mar" },
  { label: "Abr", key: "Abr" },
  { label: "Mai", key: "Mai" },
  { label: "Jun", key: "Jun" },
  { label: "Total", key: "Total" },
];

const columnLCDPR: Column[] = [
  // { label: "+/-", key: "toggle" },
  // { label: "ID", key: "id" },
  { label: "Mês", key: "Mês" },
  { label: "Saldo de prejuízo(s) a compensar", key: "Controle" },
  { label: "Receita", key: "Receita" },
  { label: "Despesas de custeio e investimento totais", key: "Despesas" },
  { label: "Resultado não tributável/indedutivel", key: "resultadoNaoTributado" },
  { label: "Resultado do periodo", key: "ResultadoPeriodo" },
  { label: "Saldo prejuizo acumulado utilizado no periodo", key: "SaldoPrejuUtil" },
  { label: "Resultado tributável para fins de irrf ", key: "ResultadoParaIRPF" },
  { label: "IRPF pelo resultado ", key: "IRPFPeloResutado" },
  { label: "Aliq. Efetiva %", key: "AliqIRPF" },
  { label: "Limite de 20% sobre a receita bruta", key: "IRPFLimite20" },
  { label: " IRPF pelo limite de 20% faturamento", key: "IRPFPeloLimite20" },
  { label: "Aliq. Efetiva %", key: "AliqIRPF20" },
  { label: "Contratos de mútuo em Aberto 31/12/2021", key: "ContratoMutuo" },
  { label: "Contratos de mútuo em Aberto", key: "ContratoMutuoAtual" },
  { label: "Variação", key: "VariacaoReceber"},
  { label: "Contratos de mútuo em Aberto 31/12/2021", key: "ContratoMutuoPagar" },
  { label: "Contratos de mútuo em Aberto", key: "ContratoMutuoAtualPagar" },
  { label: "Emprestimos e Financiamentos em Aberto 31/12/2021", key: "Emprestimos" },
  { label: "Emprestimos e Financiamentos em Aberto (atual)", key: "EmprestimosAtual" },
  { label: "Variação", key: "VariacaoPagar"},
  { label: "Saldo de caixa", key: "Saldo" },
];

const tableLCDPR: any[] = [
  {
    id: "1",
    Mês: "Jan",
    Controle: 300,
    Receita: 300,
    Despesas: 300,
    resultadoNaoTributado: 300,
    ResultadoPeriodo: 300,
    SaldoPrejuUtil: 300,
    ResultadoParaIRPF: 300,
    IRPFPeloResutado: 300,
    AliqIRPF: 300,
    IRPFLimite20: 300,
    IRPFPeloLimite20: 300,
    AliqIRPF20: 300,
    ContratoMutuo: 300,
    ContratoMutuoAtual: 300,
    VariacaoReceber: 300,
    ContratoMutuoPagar: 300,
    ContratoMutuoAtualPagar: 300,
    Emprestimos: 300,
    EmprestimosAtual: 300,
    VariacaoPagar: 300,
    Saldo: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    Mês: "Fev",
    Controle: 300,
    Receita: 300,
    Despesas: 300,
    resultadoNaoTributado: 300,
    ResultadoPeriodo: 300,
    SaldoPrejuUtil: 300,
    ResultadoParaIRPF: 300,
    IRPFPeloResutado: 300,
    AliqIRPF: 300,
    IRPFLimite20: 300,
    IRPFPeloLimite20: 300,
    AliqIRPF20: 300,
    ContratoMutuo: 300,
    ContratoMutuoAtual: 300,
    VariacaoReceber: 300,
    ContratoMutuoPagar: 300,
    ContratoMutuoAtualPagar: 300,
    Emprestimos: 300,
    EmprestimosAtual: 300,
    VariacaoPagar: 300,
    Saldo: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "3",
    Mês: "Mar",
    Controle: 300,
    Receita: 300,
    Despesas: 300,
    resultadoNaoTributado: 300,
    ResultadoPeriodo: 300,
    SaldoPrejuUtil: 300,
    ResultadoParaIRPF: 300,
    IRPFPeloResutado: 300,
    AliqIRPF: 300,
    IRPFLimite20: 300,
    IRPFPeloLimite20: 300,
    AliqIRPF20: 300,
    ContratoMutuo: 300,
    ContratoMutuoAtual: 300,
    VariacaoReceber: 300,
    ContratoMutuoPagar: 300,
    ContratoMutuoAtualPagar: 300,
    Emprestimos: 300,
    EmprestimosAtual: 300,
    VariacaoPagar: 300,
    Saldo: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "4",
    Mês: "Abr",
    Controle: 300,
    Receita: 300,
    Despesas: 300,
    resultadoNaoTributado: 300,
    ResultadoPeriodo: 300,
    SaldoPrejuUtil: 300,
    ResultadoParaIRPF: 300,
    IRPFPeloResutado: 300,
    AliqIRPF: 300,
    IRPFLimite20: 300,
    IRPFPeloLimite20: 300,
    AliqIRPF20: 300,
    ContratoMutuo: 300,
    ContratoMutuoAtual: 300,
    VariacaoReceber: 300,
    ContratoMutuoPagar: 300,
    ContratoMutuoAtualPagar: 300,
    Emprestimos: 300,
    EmprestimosAtual: 300,
    VariacaoPagar: 300,
    Saldo: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "5",
    Mês: "Mai",
    Controle: 300,
    Receita: 300,
    Despesas: 300,
    resultadoNaoTributado: 300,
    ResultadoPeriodo: 300,
    SaldoPrejuUtil: 300,
    ResultadoParaIRPF: 300,
    IRPFPeloResutado: 300,
    AliqIRPF: 300,
    IRPFLimite20: 300,
    IRPFPeloLimite20: 300,
    AliqIRPF20: 300,
    ContratoMutuo: 300,
    ContratoMutuoAtual: 300,
    VariacaoReceber: 300,
    ContratoMutuoPagar: 300,
    ContratoMutuoAtualPagar: 300,
    Emprestimos: 300,
    EmprestimosAtual: 300,
    VariacaoPagar: 300,
    Saldo: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "6",
    Mês: "Jun",
    Controle: 300,
    Receita: 300,
    Despesas: 300,
    resultadoNaoTributado: 300,
    ResultadoPeriodo: 300,
    SaldoPrejuUtil: 300,
    ResultadoParaIRPF: 300,
    IRPFPeloResutado: 300,
    AliqIRPF: 300,
    IRPFLimite20: 300,
    IRPFPeloLimite20: 300,
    AliqIRPF20: 300,
    ContratoMutuo: 300,
    ContratoMutuoAtual: 300,
    VariacaoReceber: 300,
    ContratoMutuoPagar: 300,
    ContratoMutuoAtualPagar: 300,
    Emprestimos: 300,
    EmprestimosAtual: 300,
    VariacaoPagar: 300,
    Saldo: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableRceitas: any[] = [
  {
    id: "1",
    descrição: "Saldo de prejuízo(s) a compensar",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableResultTributado: any[] = [
  {
    id: "1",
    descrição: "Receita",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "Despesas de custeio e investimento totais",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableResultNaoTributavel: any[] = [
  {
    id: "1",
    descrição: "Resultado não tributável/indedutivel",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableResultPeriodo: any[] = [
  {
    id: "1",
    descrição: "Resultado",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tablePrejuUtilizado: any[] = [
  {
    id: "1",
    descrição: "Prejuizo acumulado utilizado",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableTributavelIRRF: any[] = [
  {
    id: "1",
    descrição: "Resultado para fins de IRPF    ",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];
const tableIRRF: any[] = [
  {
    id: "1",
    descrição: "Aliq. Efetiva",
    Jan: "12%",
    Fev: "12%",
    Mar: "12%",
    Abr: "12%",
    Mai: "12%",
    Jun: "12%",
    Total: "",
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "Limite de 20% sobre a receita bruta",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableResultIRRF: any[] = [
  {
    id: "1",
    descrição: "Aliq. Efetiva",
    Jan: "12%",
    Fev: "12%",
    Mar: "12%",
    Abr: "12%",
    Mai: "12%",
    Jun: "12%",
    Total: "",
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "IRPF pelo limite de 20% faturamento",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableAReceber: any[] = [
  {
    id: "1",
    descrição: "Contratos de mútuo em Aberto 31/12/2021",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "Contratos de mútuo em Aberto (Atual)",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "3",
    descrição: "Variação",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableAPagar: any[] = [
  {
    id: "1",
    descrição: "Contratos de mútuo em Aberto 31/12/2021",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "2",
    descrição: "Contratos de mútuo em Aberto (Atual)",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "4",
    descrição: "Emprestimos e Financiamentos em Aberto 31/12/2021",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "5",
    descrição: "Emprestimos e Financiamentos em Aberto (Atual)",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
  {
    id: "6",
    descrição: "Variação",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const tableSaldo: any[] = [
  {
    id: "1",
    descrição: "Saldo",
    Jan: 300,
    Fev: 300,
    Mar: 300,
    Abr: 300,
    Mai: 300,
    Jun: 300,
    Total: 900,
    isExpanded: false,
    // subRows: [{}],
  },
];

const PageLCDPR = () => {
  const [tabelaVisivel, setTabelaVisivel] = useState(true);
  const alternarTabela = () => {
    setTabelaVisivel((prevState) => !prevState);
  };

  return (
    <Box p={3}>
      <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
        DEMONSTRATIVO DE ATIVIDADE RURAL
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
        <Stack align="center" direction="row">
          <Switch size="sm"  onChange={alternarTabela} />
        </Stack>
      </Flex>

      <Box display={tabelaVisivel ? 'none' : 'block'}>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          LCDPR
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableLCDPR}
            columns={columnLCDPR}
            resultTable={true}
          />
        </Box>
      </Box>

      <Box display={tabelaVisivel ? 'block' : 'none'}>
        <Heading color={"teal"} mb={"5"} fontSize={"x-large"}>
          CONTROLE DE SALDO DE PREJUÍZO(S) A COMPENSAR ACUMULADO
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableRceitas}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          APURAÇÃO DO RESULTADO TRIBUTÁVEL
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableResultTributado}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          RESULTADO NÃO TRIBUTÁVEL
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableResultNaoTributavel}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          RESULTADO DO PERIODO
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableResultPeriodo}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          SALDO PREJUIZO ACUMULADO UTILIZADO NO PERIODO
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tablePrejuUtilizado}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          RESULTADO TRIBUTÁVEL PARA FINS DE IRRF
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableTributavelIRRF}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          IRPF PELO RESULTADO
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz data={tableIRRF} columns={columns} resultTable={true} />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          IRPF PELO LIMITE DE 20% FATURAMENTO
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableResultIRRF}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          A RECEBER
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableAReceber}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          A PAGAR
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableAPagar}
            columns={columns}
            resultTable={true}
          />
        </Box>
        <Heading color={"teal"} mb={"5"} mt={"5"} fontSize={"x-large"}>
          SALDO DE CAIXA
        </Heading>
        <Box bg={"white"}>
          <TabelaMatriz
            data={tableSaldo}
            columns={columns}
            resultTable={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PageLCDPR;
