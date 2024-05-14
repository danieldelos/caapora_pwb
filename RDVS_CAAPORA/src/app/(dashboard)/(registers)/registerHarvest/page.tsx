"use client";
import AddAndUpload from "@/components/dashboardComponents/AddUpload";
import SearchComponent from "@/components/dashboardComponents/Search";
import TableItens from "@/components/dashboardComponents/TableItens";
import { companieContext } from "@/context/companieContext";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";

const title = 'Cultura'
const headerTable = [{column1:'id', column2:'name' }]
const footerTable = headerTable

const RegisterHarvestpPage = () => {
  const { harvest, deleteHarvest }: any = useContext(companieContext)
  const [searchTerm, setSearchTerm] = useState(''); 
  const itensTable = harvest && harvest
  .filter((elem: any) => elem.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((elem: any) => {
    return ({ item1: String(elem.id), item2: elem.name})
  });
  return (
    <>
      <Flex flexDir={"column"} justify={"center"}>
        <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
          Cadastro de {title}
        </Heading>
        <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      </Flex>
      <AddAndUpload title={title}/>
      <TableItens headerTable={headerTable} footerTable={footerTable} itensTable={itensTable} title={title} deleteHarvest={deleteHarvest}/>
    </>
  );
};

export default RegisterHarvestpPage;
