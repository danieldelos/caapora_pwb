"use client";
import { userContext } from "@/context/userContext";
import {
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

export default function SplitScreenRegister() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Form1 />
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
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
  const handleClick = () => setShow(!show);
  
  const {register, handleSubmit} = useForm()
  
  const {createUser}:any = useContext(userContext)
  const onFormSubmit = (formData:any) => {
    console.log(formData)
    createUser(formData)
  }
  return (
    <>
      <Heading fontSize={"2xl"}>Faça o seu registro</Heading>
      <Flex>
        <FormControl id="name" mr="2%">
          <FormLabel htmlFor="name" fontWeight={"normal"}>
            Nome
          </FormLabel>
          <Input required type="text" placeholder="Nome do Usuário" {...register("name")}/>
        </FormControl>

        {/* <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Sobrenome
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl> */}

      </Flex>
      <FormControl id="email" mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email
        </FormLabel>
        <Input id="email" type="email" {...register("email")}/>
        {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
      </FormControl>

      <FormControl id="password">
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Senha
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            {...register("password")}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme={"blue"} variant={"solid"} width="100%" onClick={handleSubmit(onFormSubmit)}>
        Cadastrar
      </Button>
      <ToastContainer theme="colored" />
    </>
  );
};
