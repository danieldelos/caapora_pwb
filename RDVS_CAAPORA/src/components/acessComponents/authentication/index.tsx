"use client";
import { useAuth } from '@/context/authContext';
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
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function SplitScreenLogin() {
  const {login} = useAuth()
  const {register, handleSubmit} = useForm()
  const onFormSubmit = (formData:any) => {
    login(formData)
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Faça login em sua conta</Heading>
          <FormControl id="email">
            <FormLabel>Endereço de email</FormLabel>
            <Input type="email" {...register("email")}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" {...register("password")}/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Lembrar Senha</Checkbox>
              <Text color={'blue.500'}>Esqueceu sua senha?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit(onFormSubmit)}>
              Login
            </Button>
            <ToastContainer theme="colored" />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}