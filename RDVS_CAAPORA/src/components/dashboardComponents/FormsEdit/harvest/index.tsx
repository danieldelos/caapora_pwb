"use client";
import { companieContext } from "@/context/companieContext";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormHelperText,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function FormEditHarvest({id}: any) {
  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }} >
      <Flex p={8} flex={1} align={'flex-start'} justify={"center"} >
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Form1 id={id}/>
        </Stack>
      </Flex>
    </Stack>
  );
}

interface IUser {
  name: string,
  email: string,
  password: string
}

const Form1 = ({id}: any) => {
  const {register, handleSubmit} = useForm()
  
  const {harvest, editHarvest}:any = useContext(companieContext)
  const oldharvest = harvest.find((elem: { id: any; })=> {return elem.id === Number(id)})
  const { name, ncm } = oldharvest;
  const oldharvestAlter = { name, ncm };
  const [valueData, setValueData] = useState(oldharvestAlter)

  const handleInputChange = (event: { target: { name: string; value: string; }; }) =>{
    const {name, value} = event.target;
    setValueData({...valueData, [name]:value})
  }

  const onFormSubmit = () => {
    editHarvest(valueData, Number(id))
  }
  return (
    <Box bg={'white'} p={'5'} borderRadius={'5%'}>
      <Heading fontSize={"2xl"} mb={'5%'}>Dados da Cultura</Heading>
      <Flex flexDir={'column'} justify={'space-between'}>
        <FormControl id="name" mb={'5%'}>
          <FormLabel htmlFor="name" fontWeight={"normal"}>
            Safra
          </FormLabel>
          <Input required type="text" placeholder="Nome da Safra" {...register("name")} value={valueData.name} onChange={handleInputChange}/>
        </FormControl>

        <FormControl id="ncmm" mb={'5%'}>
          <FormLabel htmlFor="ncmm" fontWeight={"normal"}>
            NCM
          </FormLabel>
          <Input required type="text" placeholder="Número do NCM" {...register("ncm")} value={valueData.ncm} onChange={handleInputChange}/>
        </FormControl>

       <Button colorScheme={"blue"} variant={"solid"} width="100%" onClick={handleSubmit(onFormSubmit)} mt={'5%'}>
        Atualizar
      </Button>
      <ToastContainer theme="colored" />
      </Flex>
    </Box>
  );
};
