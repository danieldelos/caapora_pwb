"use client";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  DrawerCloseButton,
  DrawerFooter,
  Flex,
  Box,
  Select,
  Text,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { FcEmptyFilter } from "react-icons/fc";
import React from "react";
import { useForm } from "react-hook-form";

function FilterDashDrawer({ title }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef<any>();

  const {register, handleSubmit} = useForm()

  const onFormSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <>
      <Button leftIcon={<FcEmptyFilter />} colorScheme="teal" onClick={onOpen}>
        Filtros de {title}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
          <DrawerBody>
            <Flex flexDir={"column"} gap={4}>
              <Flex gridGap="4" align={"center"} justifyContent={"center"} flexDir={"column"}>

                <Flex gap={3}>
                  <Box w={["100%", "50%"]}>
                    <Text mb="2">Fazenda:</Text>
                    <Select placeholder="Selecione uma fazenda" {...register("fazenda")} >
                      {/* Substitua por suas opções */}
                      <option value="fazenda1">Fazenda 1</option>
                      <option value="fazenda2">Fazenda 2</option>
                    </Select>
                  </Box>

                  <Box w={["100%", "50%"]}>
                    <Text mb="2">Safra:</Text>
                    <Select placeholder="Selecione uma safra" {...register("safra")}>
                      {/* Substitua por suas opções */}
                      <option value="safra1">Safra 1</option>
                      <option value="safra2">Safra 2</option>
                    </Select>
                  </Box>
                </Flex>

                <Flex gap={3}>
                  <Box w={["100%", "50%"]}>
                    <Text mb="2">Cultura:</Text>
                    <Select placeholder="Selecione uma cultura" {...register("cultura")}>
                      {/* Substitua por suas opções */}
                      <option value="cultura1">Cultura 1</option>
                      <option value="cultura2">Cultura 2</option>
                    </Select>
                  </Box>

                  <Box w={["100%", "50%"]}>
                    <Text mb="2">Talhão:</Text>
                    <Select placeholder="Selecione um talhão" {...register("talhao")}>
                      {/* Substitua por suas opções */}
                      <option value="talhao1">Talhão 1</option>
                      <option value="talhao2">Talhão 2</option>
                    </Select>
                  </Box>
                </Flex>
                <Flex gap={3}  flexDir={'row'} align={'center'} justifyContent={'center'}>
                  <FormControl id="dateStart" mb={"5%"} w={["30%"]}>
                    <FormLabel htmlFor="dateStart" fontWeight={"normal"} >
                      Data início
                    </FormLabel>
                    <Input required  type="date" placeholder="Data início" {...register("dateStart")}/>
                  </FormControl>

                  <FormControl id="dateEnd" mb={"5%"} w={["30%"]}>
                    <FormLabel htmlFor="dateEnd" fontWeight={"normal"}>
                      Data Fim
                    </FormLabel>
                    <Input required  type="date" placeholder="Data Fim" {...register("dateEnd")}/>
                  </FormControl>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Sair
            </Button>
            <Button colorScheme="blue"  onClick={handleSubmit(onFormSubmit)}>Aplicar Filtros</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FilterDashDrawer;
