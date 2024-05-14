"use client";
import AddAndUpload from "@/components/dashboardComponents/AddUpload";

import SearchComponent from "@/components/dashboardComponents/Search";
import TableImport from "@/components/dashboardComponents/TableImports";
import TableItens from "@/components/dashboardComponents/TableItens";
import { companieContext } from "@/context/companieContext";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";

const title = 'Balancetes'

const RegisterPlotpPage = () => {

  return (
    <>
      <Flex flexDir={"column"} justify={"center"}>
        <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
          Cadastro de {title}
        </Heading>
      </Flex>
      <AddAndUpload title={title}/>
      <TableImport/>
    </>
  );
};

export default RegisterPlotpPage;