"use client";
import FilterDashDrawer from "@/components/dashboardComponents/IndicatorsComponents/FilterDrawer";
import { BarComponent } from "@/components/graficsComponents/Bar";
import { DoughnutComponent } from "@/components/graficsComponents/Doughnut";
import { LineComponent } from "@/components/graficsComponents/Line";
import { PieComponent } from "@/components/graficsComponents/Pie";
import { Box, Flex, Heading } from "@chakra-ui/react";

const title = 'Indicadores de Investimentos'

const generateRandomData = (length: number) => {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 101)); // gera um número entre 0 e 100
  }
  return data;
};

const InvestmentsMetrics = () => {
  return (
    <>
    <Flex ml={"10px"}  justifyContent={"center"} gap={2} flexWrap={"wrap"} shadow={"2xl"} p={5} w={"98%"} h={"95%"} flexDir={"column"}>
      <Heading as={"h1"} textAlign={"center"} mb={"2%"}>
        {title}
      </Heading>
      <Flex w={"100%"} h={"5em"}  p={5}>
        <FilterDashDrawer title={title}/>
      </Flex>
      <Flex flexDir={'row'} gap={3} flexWrap={'wrap'} justifyContent={'center'}>
          <Box w={"600px"} h={"400px"} bg={"white"} p={5}>
            <BarComponent generateRandomData={generateRandomData} />
          </Box>
          <Box w={"400px"} h={"400px"} bg={"white"} p={5}>
            <PieComponent generateRandomData={generateRandomData} />
          </Box>
          <Box w={"600px"} h={"400px"} bg={"white"} p={5}>
            <LineComponent generateRandomData={generateRandomData} />
          </Box>
          <Box w={"400px"} h={"400px"} bg={"white"} p={5}>
            <DoughnutComponent generateRandomData={generateRandomData} />
          </Box>
        </Flex>
    </Flex>
  </>
  );
};

export default InvestmentsMetrics;
