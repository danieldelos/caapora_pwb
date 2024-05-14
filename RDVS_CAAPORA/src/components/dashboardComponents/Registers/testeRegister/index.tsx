import { useState } from 'react';
import { useForm, FormProvider, useFormContext, useFieldArray } from 'react-hook-form';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';

const Form1 = () => {
  const methods = useFormContext();

  return (
    <form onSubmit={methods.handleSubmit(data => console.log(data))}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Cadastro de Empresa
      </Heading>

      <Flex justify={'space-around'} gap={5}>
        <FormControl>
          <FormLabel htmlFor="legal_business_name" fontWeight={'normal'}>
            Razão Social
          </FormLabel>
          <Input {...methods.register('legal_business_name')} id="legal_business_name" placeholder="Razão Social" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="trade_name" fontWeight={'normal'}>
            Apelido
          </FormLabel>
          <Input {...methods.register('trade_name')} id="trade_name" placeholder="Apelido" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="doc" fontWeight={'normal'}>
            CNPJ
          </FormLabel>
          <Input {...methods.register('doc')} id="doc" placeholder="CNPJ" />
        </FormControl>
      </Flex>

      <Flex justify={'space-around'} gap={5} mt={5}>
        <FormControl>
          <FormLabel htmlFor="city" fontWeight={'normal'}>
            Cidade
          </FormLabel>
          <Input {...methods.register('city')} id="city" placeholder="Cidade" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="state" fontWeight={'normal'}>
            Estado
          </FormLabel>
          <Input {...methods.register('state')} id="state" placeholder="Estado" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="group" fontWeight={'normal'}>
            Grupo
          </FormLabel>
          <Input {...methods.register('group')} id="group" placeholder="Grupo" />
        </FormControl>
      </Flex>

      <Flex justifyContent={'space-between'}>
        <RadioGroup defaultValue='2' mt={5}>
          <Text fontSize='xl'>Produtor Rural?</Text>
          <Stack spacing={5} direction='row'>
            <Radio colorScheme='green' {...methods.register('is_rural')} value='1'>
              Sim
            </Radio>
            <Radio colorScheme='red' {...methods.register('is_rural')} value='2'>
              Não
            </Radio>
          </Stack>
        </RadioGroup>

        <RadioGroup defaultValue='2' mt={5}>
          <Text fontSize='xl'>Possui Balancete?</Text>
          <Stack spacing={5} direction='row'>
            <Radio colorScheme='green' {...methods.register('has_trial_balance')} value='1'>
              Sim
            </Radio>
            <Radio colorScheme='red' {...methods.register('has_trial_balance')} value='2'>
              Não
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </form>
  );
};

const Form2 = () => {
  const methods = useFormContext();
  const { register, control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'partners', // Nome do campo de array de sócios
  });

  const [newPartnerName, setNewPartnerName] = useState('');

  const handleAddPartner = () => {
    append({ name: newPartnerName });
    setNewPartnerName('');
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Socios
      </Heading>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="newPartnerName" mt="2%">
            Novo Socio
          </FormLabel>
          <InputGroup>
            <Input
              type="text"
              id="newPartnerName"
              value={newPartnerName}
              onChange={(e) => setNewPartnerName(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleAddPartner}>
                Adicionar
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>

      <Box mt="2%">
        <Heading as="h3" size="sm" mb="2%">
          Lista de Socios:
        </Heading>
        <ul>
          {fields.map((partner:any, index) => (
            <li key={partner.id}>{partner.name} <Button onClick={() => remove(index)}>Remover</Button></li>
          ))}
        </ul>
      </Box>

    </form>
  );
};

const Form3 = () => {
  const methods = useFormContext();
  const { register, control, handleSubmit } = methods;
  const { fields: partnersFields } = useFieldArray({ control: methods.control, name: 'partners' });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'farms', // Nome do campo de array de sócios
  });

  const [newFarm, setNewFarm] = useState('');

  const handleAddPartner = () => {
    append({ name: newFarm });
    setNewFarm('');
  };

  return (
    <form onSubmit={methods.handleSubmit(data => console.log(data))}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Cadastro de Fazendas
      </Heading>
      <SimpleGrid columns={1} spacing={6}>

        <Flex justifyContent={'space-between'}>
          <RadioGroup defaultValue='2' mt={5}>
            <Text fontSize='xl'>Arrendada?</Text>
            <Stack spacing={5} direction='row'>
              <Radio colorScheme='green' {...methods.register('lease')} value='1'>
                Sim
              </Radio>
              <Radio colorScheme='red' {...methods.register('lease')} value='2'>
                Não
              </Radio>
            </Stack>
          </RadioGroup>

          <RadioGroup defaultValue='2' mt={5}>
            <Text fontSize='xl'>Área Própria?</Text>
            <Stack spacing={5} direction='row'>
              <Radio colorScheme='green' {...methods.register('ownLand')} value='1'>
                Sim
              </Radio>
              <Radio colorScheme='red' {...methods.register('ownLand')} value='2'>
                Não
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        <FormControl>
          <FormLabel htmlFor="partner" fontWeight={'normal'}>
            Selecione o Sócio
          </FormLabel>
          <Select {...register('partner')} id="partner" placeholder="Selecione o Sócio">
            {partnersFields.map((partner: any, index: any) => (
              <option key={index} value={partner.name}>
                {partner.name}
              </option>
            ))}
          </Select>
        </FormControl>

        <Flex justify={'space-around'} gap={5}>
          <FormControl>
            <FormLabel htmlFor="farm_name" fontWeight={'normal'}>
              Nome da Fazenda
            </FormLabel>
            <Input {...methods.register('farm_name')} id="farm_name" placeholder="Nome da Fazenda" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="city" fontWeight={'normal'}>
              Cidade
            </FormLabel>
            <Input {...methods.register('city')} id="city" placeholder="Cidade" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="state" fontWeight={'normal'}>
              Estado
            </FormLabel>
            <Input {...methods.register('state')} id="state" placeholder="Estado" />
          </FormControl>
        </Flex>

        <Flex justify={'space-around'} gap={5}>
          <FormControl>
            <FormLabel htmlFor="total_area" fontWeight={'normal'}>
              Área Total
            </FormLabel>
            <Input {...methods.register('total_area')} id="total_area" placeholder="Área Total" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="productive_area" fontWeight={'normal'}>
              Área Produtiva
            </FormLabel>
            <Input {...methods.register('productive_area')} id="productive_area" placeholder="Área Produtiva" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="free_area" fontWeight={'normal'}>
              Área Livre
            </FormLabel>
            <Input {...methods.register('free_area')} id="free_area" placeholder="Área Livre" />
          </FormControl>
        </Flex>
      </SimpleGrid>
    </form>
  );
};

const Multistep = () => {
  const methods = useForm();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const handleSubmit = methods.handleSubmit(data => {
    console.log(data);
    toast({
      title: 'Empresa cadastrada',
      description: 'Criamos sua conta.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  });

  return (
    <FormProvider {...methods}>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        onSubmit={handleSubmit}
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                type="submit"
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </FormProvider>
  );
};

export default Multistep;
