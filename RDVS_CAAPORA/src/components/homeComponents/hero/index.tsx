'use client'
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#AABEBD',
                zIndex: -1,
              }}>
              SisCount
            </Text>
            <br />{' '}
            <Text color={'#2E5F5D'} as={'span'}>
              Gestão Empresarial
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Seus Indicadores Financeiros em um Relance.
            Entenda as tendências e tome decisões informadas.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'#2E5F5D'}
              color={'white'}
              _hover={{
                bg: '#AABEBD',
              }}>
              <Link href={'/register'}>Registro</Link>
            </Button>
            <Button bg='#AABEBD' rounded={'full'}><Link color={'white'} href={'/login'}>Login</Link></Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'/SisContBg2.png'}
        />
      </Flex>
    </Stack>
  )
}