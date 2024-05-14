"use client";
import AddAndUpload from "@/components/dashboardComponents/AddUpload";
import SearchComponent from "@/components/dashboardComponents/Search";
import TableItens from "@/components/dashboardComponents/TableItens";
import { companieContext } from "@/context/companieContext";
import { Flex, Heading } from "@chakra-ui/react";
import { group } from "console";
import { useContext, useState } from "react";

const title = 'Empresas'
const headerTable = [{column1:'id', column2:'razão social', column3:'cnpj/cpf'}]
const footerTable = headerTable

const RegisterCompaniepPage = () => {
  const { companie, deleteCompanie }: any = useContext(companieContext)
  const [searchTerm, setSearchTerm] = useState('');
  const itensTable = companie && companie
  //lista apenas as empresas sem as fazendas, o grupo que diferencia empresa da fazenda
  .filter((elem: any) => elem.legal_business_name.toLowerCase().includes(searchTerm.toLowerCase()) && elem.group != undefined) 
  .map((elem: any) => {
    return ({ item1: String(elem.id), item2: elem.legal_business_name, item3: elem.doc})
  });

  return (
    <>
      <Flex flexDir={"column"} justify={"center"}>
        <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
          Lista de {title}
        </Heading>
        <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      </Flex>
      <AddAndUpload title={title}/>
      <TableItens headerTable={headerTable} footerTable={footerTable} itensTable={itensTable} title={title} deleteCompanie={deleteCompanie}/>
    </>
  );
};

export default RegisterCompaniepPage;