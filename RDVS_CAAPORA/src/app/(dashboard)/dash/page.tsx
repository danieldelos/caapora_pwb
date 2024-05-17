"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";

const DashboardPage = () => {
  return (
    <>
      <Flex ml={"10px"} justifyContent={'center'} gap={2} flexWrap={'wrap'} shadow={'2xl'} p={5} w={"98%"} h={"95%"}>
        <iframe title="Apresentação Caaporã 2024 - copia"
          width="2000"
          height="1000"
          src="https://app.powerbi.com/view?r=eyJrIjoiMzMxOGIwYzAtYjc2Yy00NWY3LTkzZDItNjIwN2Q4YjBiYzNkIiwidCI6ImJiY2IwZGQxLWY3OTctNDZmYy05MTI0LWQ2ZDE4OTgxZTIxMiJ9"
          style={{ border: 'none' }} 
          allowFullScreen={true}></iframe>
      </Flex>
    </>
  );
};

export default DashboardPage;
