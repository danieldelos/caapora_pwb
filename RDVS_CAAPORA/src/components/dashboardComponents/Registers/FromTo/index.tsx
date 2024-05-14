// pages/mapAccounts.js
import {
  VStack,
  HStack,
  Box,
  Button,
  Select,
  Text,
  Heading,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import SearchComponent from "../../Search";

export default function MapAccounts() {
  const clientAccounts = ["Conta A", "Conta B", "Conta C"];
  const federalAccounts = ["Padrão 1", "Padrão 2", "Padrão 3"];
  const [selectedClientAccount, setSelectedClientAccount] = React.useState("");
  const [selectedFederalAccount, setSelectedFederalAccount] =
    React.useState("");

  const handleMap = () => {
    console.log(
      `Mapeando ${selectedClientAccount} para ${selectedFederalAccount}`
    );
  };

  return (
    <Container centerContent bg={'gray.100'}  w="100%">
      <VStack spacing={6} w="100%">
        <Heading>Mapeamento de Contas</Heading>
        <Box borderRadius={'8%'}>
          <SearchComponent />
        </Box>
        <HStack spacing={6} w="100%">
          <Box w="40%">
            <Text mb={2}>Conta Cliente:</Text>
            <Select
              onChange={(e) => setSelectedClientAccount(e.target.value)}
              placeholder="Selecione uma conta do cliente"
            >
              {clientAccounts.map((account) => (
                <option key={account} value={account}>
                  {account}
                </option>
              ))}
            </Select>
          </Box>
          <Box w="40%">
            <Text mb={2}>Conta Padrão:</Text>
            <Select
              onChange={(e) => setSelectedFederalAccount(e.target.value)}
              placeholder="Selecione uma conta da Receita Federal"
            >
              {federalAccounts.map((account) => (
                <option key={account} value={account}>
                  {account}
                </option>
              ))}
            </Select>
          </Box>
          <Box flexShrink={0}>
            <Button onClick={handleMap} colorScheme="blue" mt={8}>
              Mapear
            </Button>
          </Box>
        </HStack>
      </VStack>
      <ListFromTo />
    </Container>
  );
}

const ListFromTo = () => {
  return (
    <TableContainer mt={10}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Contas Mapeadas</TableCaption>
        <Thead>
          <Tr>
            <Th>Contas Cliente</Th>
            <Th>Contas Padrão</Th>
            <Th>Ação</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Cliente</Td>
            <Td>Padrão</Td>
            <Td>Edit/delete</Td>
          </Tr>
          <Tr>
            <Td>Cliente</Td>
            <Td>Padrão</Td>
            <Td>Edit/delete</Td>
          </Tr>
          <Tr>
            <Td>Cliente</Td>
            <Td>Padrão</Td>
            <Td>Edit/delete</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
          <Th>Contas Cliente</Th>
            <Th>Contas Padrão</Th>
            <Th>Ação</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
