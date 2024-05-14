"use client";
import ContasConciliacao from "@/components/dashboardComponents/Registers/Conversion";
import StandardChartsFile from "@/components/dashboardComponents/Registers/StandarCharts";
import SearchComponent from "@/components/dashboardComponents/Search";
import TableBalancete from "@/components/dashboardComponents/TableBalancete";
import TableSScrop from "@/components/dashboardComponents/TableSSCrop";
import { companieContext } from "@/context/companieContext";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";

const title = 'Contas'
// const title = 'Balancete'
const headerTable = [{ column1: 'Conta Cliente', column2: 'Descrição' }]
const footerTable = headerTable

const titleSSCROP = 'SSCROP'
// const title = 'Balancete'
const headerTableSSCROP = [{
  column1: 'Doc type name',
  column2: 'Category name',
  column3: 'Subcategory name',
}]
const footerTableSSCROP = headerTableSSCROP

const RegisterPlotpPage = () => {
  const { count, system, balance, idFromTo }: any = useContext(companieContext);
  const data = balance.length > 0 ? balance[0].combinationsFile : []
  const [searchTerm, setSearchTerm] = useState('');
  const itensTable = count && count
  const novoArray = itensTable.map(({ code, description }: any) => ({ code, description }))
    .filter((elem: any) => elem.description.toLowerCase().includes(searchTerm.toLowerCase()) || elem.code.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((elem: any) => {
      return ({ item1: String(elem.code), item2: elem.description })
    });
  return (
    <>
      <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
        Importação de Balancete
      </Heading>
      <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <StandardChartsFile  />
      <Flex flexDir={"column"} justify={"center"}>
      </Flex>

      {system === 'SSCROP' && (
        <>
          {/* <ContasConciliacao /> */}
          <h1>sscrop</h1>
          <TableSScrop idFromTo={idFromTo} headerTable={headerTableSSCROP} itensTable={balance.length > 0 ? balance[0].combinationsFile : []} optionSelect={balance.length > 0 ? balance[0].typesAccount : []} />
        </>
      )}
      {system === 'padrao' && (
        <>
          <TableBalancete headerTable={headerTable} footerTable={footerTable} itensTable={novoArray} title={title} optionSelect={count} />
        </>
      )}
    </>
  );
};

export default RegisterPlotpPage;

