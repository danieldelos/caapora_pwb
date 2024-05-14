"use client";
import BasicStatistics from "@/components/dashboardComponents/Statistics";
import { BarComponent } from "@/components/graficsComponents/Bar";
import { DoughnutComponent } from "@/components/graficsComponents/Doughnut";
import { LineComponent } from "@/components/graficsComponents/Line";
import { PieComponent } from "@/components/graficsComponents/Pie";
import { Box, Flex, Heading } from "@chakra-ui/react";

const generateRandomData = (length: number) => {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 101)); // gera um número entre 0 e 100
  }
  return data;
};

const numberRandom = (45000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});


const labels = ['January', 'February', 'March', 'April', 'May'];

const DashboardPage = () => {
  return (
    <>
      <Heading as={"h1"} textAlign={"center"} mb={"2%"}>Dashboard</Heading>
        <BasicStatistics numberRandom={numberRandom}/>
      <Flex ml={"10px"} justifyContent={'center'} gap={2} flexWrap={'wrap'} shadow={'2xl'} p={5} w={"98%"} h={"95%"}>
        <Box w={"600px"} h={"400px"} bg={"white"} p={5}>
          <BarComponent generateRandomData={generateRandomData}/>
        </Box>
        <Box w={"400px"} h={"400px"} bg={"white"} p={5}>
          <PieComponent generateRandomData={generateRandomData}/>
        </Box>
        <Box w={"600px"} h={"400px"} bg={"white"} p={5}>
          <LineComponent generateRandomData={generateRandomData}/>
        </Box>
        <Box w={"400px"} h={"400px"} bg={"white"} p={5}>
          <DoughnutComponent generateRandomData={generateRandomData}/>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardPage;
