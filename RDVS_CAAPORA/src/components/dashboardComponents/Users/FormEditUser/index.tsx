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

export default function FormEditUser({id}: any) {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
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
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {register, handleSubmit} = useForm()
  
  const {user, editUser}:any = useContext(userContext)
  const oldUser = user.find((elem: { id: any; })=> {return elem.id === Number(id)})
  const { name, email} = oldUser;
  const oldUserAlter = { name, email };
  const [valueData, setValueData] = useState(oldUserAlter)

  const handleInputChange = (event: { target: { name: string; value: string; }; }) =>{
    const {name, value} = event.target;
    setValueData({...valueData, [name]:value})
  }

  const onFormSubmit = () => {
    console.log(valueData)
    editUser(valueData, Number(id))
  }
  return (
    <>
      <Heading fontSize={"2xl"}>Dados do Usuário</Heading>
      <Flex>
        <FormControl id="name" mr="2%">
          <FormLabel htmlFor="name" fontWeight={"normal"}>
            Nome
          </FormLabel>
          <Input required type="text" placeholder="Nome do Usuário" {...register("name")} value={valueData.name} onChange={handleInputChange}/>
        </FormControl>
      </Flex>
      <FormControl id="email" mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email
        </FormLabel>
        <Input id="email" type="email" {...register("email")} value={valueData.email} onChange={handleInputChange}/>
        {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
      </FormControl>

      {/* <FormControl id="password">
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
      </FormControl> */}
      <Button colorScheme={"blue"} variant={"solid"} width="100%" onClick={handleSubmit(onFormSubmit)}>
        Atualizar
      </Button>
      <ToastContainer theme="colored" />
    </>
  );
};
