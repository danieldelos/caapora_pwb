"use client";
import AddAndUpload from "@/components/dashboardComponents/AddUpload";
import SearchComponent from "@/components/dashboardComponents/Search";
import TableItens from "@/components/dashboardComponents/TableItens";
import { Box, Flex, Heading } from "@chakra-ui/react";

const title = 'Razão'
const headerTable = [{column1:'id', column2:'Razão', column3:'Status' }]
const footerTable = headerTable
const itensTable = [
                    {item1: '1', item2: 'item1', item3: 'Ativo'}, 
                    {item1: '2', item2: 'item2', item3: 'Ativo'},
                    {item1: '3', item2: 'item3', item3: 'Ativo'},
                  ]

const RegisterLedgePage = () => {
  const deleteStandardChart = 'delete'
  return (
    <>
      <Flex flexDir={"column"} justify={"center"}>
        <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
          Cadastro de {title}
        </Heading>
        <SearchComponent />
      </Flex>
      <AddAndUpload title={title}/>
      <TableItens headerTable={headerTable} footerTable={footerTable} itensTable={itensTable} title={title}/>
    </>
  );
};  

export default RegisterLedgePage;