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

export default function RegisterPlot() {
  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }} >
      <Flex p={8} flex={1} align={'flex-start'} justify={"center"} >
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Form1 />
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


const Form1 = () => {
  const [show, setShow] = useState(false);
  const {register, handleSubmit} = useForm()
  
  const {addPlot}:any = useContext(companieContext)
  const onFormSubmit = (formData:any) => {
    addPlot(formData)
  }
  return (
    <Box bg={'white'} p={'5'} borderRadius={'5%'}>
      <Heading fontSize={"2xl"} mb={'5%'}>Cadastro do Talhão</Heading>
      <Flex flexDir={'column'} justify={'space-between'}>
        <FormControl id="name" mb={'5%'}>
          <FormLabel htmlFor="name" fontWeight={"normal"}>
            Talhão
          </FormLabel>
          <Input required type="text" placeholder="Nome do Talhão" {...register("name")}/>
        </FormControl>

      <Button colorScheme={"blue"} variant={"solid"} width="100%" onClick={handleSubmit(onFormSubmit)} mt={'5%'}>
        Cadastrar
      </Button>
      <ToastContainer theme="colored" />
      </Flex>
    </Box>
  );
};
