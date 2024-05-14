import { Box, Flex, Select, Text } from "@chakra-ui/react";

function FilterBasics() {
  return (
    <Box>
      <Flex  gridGap="4" align={'center'} justifyContent={'center'} flexDir={'column'}>
        <Flex gap={3}>
          <Box w={["100%", "50%"]}>
            <Text mb="2">Fazenda:</Text>
            <Select placeholder="Selecione uma fazenda">
              {/* Substitua por suas opções */}
              <option value="fazenda1">Fazenda 1</option>
              <option value="fazenda2">Fazenda 2</option>
            </Select>
          </Box>
          
          <Box w={["100%", "50%"]}>
            <Text mb="2">Safra:</Text>
            <Select placeholder="Selecione uma safra">
              {/* Substitua por suas opções */}
              <option value="safra1">Safra 1</option>
              <option value="safra2">Safra 2</option>
            </Select>
          </Box>
        </Flex>
        
        <Flex gap={3}>
          <Box w={["100%", "50%"]}>
            <Text mb="2">Cultura:</Text>
            <Select placeholder="Selecione uma cultura">
              {/* Substitua por suas opções */}
              <option value="cultura1">Cultura 1</option>
              <option value="cultura2">Cultura 2</option>
            </Select>
          </Box>
          
          <Box w={["100%", "50%"]}>
            <Text mb="2">Talhão:</Text>
            <Select placeholder="Selecione um talhão">
              {/* Substitua por suas opções */}
              <option value="talhao1">Talhão 1</option>
              <option value="talhao2">Talhão 2</option>
            </Select>
          </Box>
        </Flex>
        
      </Flex>
    </Box>
  );
}

export default FilterBasics;
