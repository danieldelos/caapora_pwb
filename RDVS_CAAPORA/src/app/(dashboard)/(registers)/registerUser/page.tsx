"use client";
import AddAndUpload from "@/components/dashboardComponents/AddUpload";
import SearchComponent from "@/components/dashboardComponents/Search";
import TableItens from "@/components/dashboardComponents/TableItens";
import { userContext } from "@/context/userContext";
import { useContext, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";

const title = 'Usuários'
const headerTable = [{column1:'id', column2:'name', column3:'email' }]
const footerTable = headerTable

const RegisterUserPage = () => {
  
  const { user, deleteUser }: any = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState(''); 
  const itensTable = user && user
    .filter((elem: any) => elem.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((elem: any) => {
      return ({ item1: String(elem.id), item2: elem.name, item3: elem.email })
    });

  return (
    <>
      <Flex flexDir={"column"} justify={"center"}>
        <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
          Lista de {title}
        </Heading>
        <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </Flex>
      <AddAndUpload title={title}/>
      <TableItens headerTable={headerTable} footerTable={footerTable} itensTable={itensTable} title={title} deleteUser={deleteUser}/>
    </>
  );
};

export default RegisterUserPage;