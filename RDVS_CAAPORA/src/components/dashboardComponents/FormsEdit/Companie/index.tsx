import React, { useEffect, useState } from 'react';
import {
  Box,
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
  VStack,
  HStack,
  Stack,
  Flex,
  Radio,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Badge,
} from '@chakra-ui/react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { companieContext } from '@/context/companieContext';
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface Partner {
  doc: string;
  name: string;
}

interface Farm {
  lease: boolean;
  ownLand: boolean;
  nameFarm: string;
  nameDoSocio: string;
  caepf: string;
  cityFazenda: string;
  ufFarm: string;
  inscrEstadualFarm: string;
  fullArea: string;
  leasedArea: string;
  productivArea: string;
  freeArea: string;
}

interface FormData {
  balancete: boolean;
  produtorRural: boolean;
  legal_business_name: string;
  trade_name: string;
  cnpj_cpf: string;
  caepf: string;
  inscrEstadualMaster: string;
  city: string;
  state: string;
  name_group: string;
  fullArea: number;
  leasedArea: string;
  productivArea: number;
  freeArea: number;
  partners: Partner[];
  farms: Farm[];
}

export default function FormEditCompanie({id}: any) {
  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }} >
      <Flex p={8} flex={1} align={'flex-start'} justify={"center"} >
        <Stack spacing={4} w={"full"} maxW={'8xl'}>
          <Form1 formId = {id}/>
        </Stack>
      </Flex>
    </Stack>
  );
}

interface Form1Props {
  formId: any; 
}

const Form1: React.FC<Form1Props> = ({ formId }: Form1Props) => {
  const { editCompanie, companie }: any = useContext(companieContext)
  const { register, handleSubmit, watch, setValue } = useForm<any>({
    defaultValues: {
      produtorRural: 'false',
      balancete: 'false',
      lease: 'false',
      ownLand: 'false',
    },
  });

  const itemSelecionado = companie.filter((elem: { id: any; })=> elem.id === Number(formId))
  const [modifiedPartners, setModifiedPartners] = useState<any[]>([]);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { trade_name, legal_business_name, city, cnpj_cpf, state } = data;
    const partnserDoctype = partners.map(partner => ({ ...partner, doc_type: "cpf" }))
    
    const farmBranch = farms.map(branch => ({
      legal_business_name: branch.nameFarm,
      trade_name: branch.nameFarm,
      doc: branch.caepf,
      doc_type: "caepf",
      country: "Brazil",
      state: branch.ufFarm,
      city: branch.cityFazenda,
      has_trial_balance: Boolean(data.balancete),
      is_rural: Boolean(data.produtorRural),
      partners: partnserDoctype.filter(partner => partner.name === branch.nameFarmPartner),
      data: {
        area_total: branch.fullArea,
        area_arrendada: branch.leasedArea,
        area_produtiva: branch.productivArea,
        area_livre: branch.freeArea,
      }
    }))

    // const newData: any = {
    //   legal_business_name: legal_business_name,
    //   trade_name: trade_name,
    //   doc: cnpj_cpf,
    //   doc_type: "cnpj",
    //   country: "Brazil",
    //   state: state,
    //   city: city,
    //   has_trial_balance: Boolean(data.balancete),
    //   is_rural: Boolean(data.produtorRural),
    //   data: {
    //     area_total: "here"
    //   },
    //   partners: partnserDoctype,
    //   branches: farmBranch,
    // }

    
    const modificarObjeto = (arrayOriginal: Object[], index: number, objetoModificador: Object): any => {
      // Verifica se o índice está dentro dos limites do array
      if (index < 0 || index >= arrayOriginal.length) {
        return arrayOriginal; // Retorna o array original se o índice for inválido
      }
    
      // Cria uma cópia do array original para não modificar o array original diretamente
      const arrayModificado = [...arrayOriginal];
    
      // Modifica o objeto no índice especificado com base no objeto modificador
      arrayModificado[index] = { ...arrayOriginal[index], ...objetoModificador };
      return arrayModificado
     
    }

    const modifiedPartners:any = modificarObjeto(itemSelecionado[0].partners, 0, payloadPartner);

    const newData: any = {
      legal_business_name: legal_business_name ? legal_business_name : itemSelecionado[0].legal_business_name,
      trade_name: trade_name ? trade_name : itemSelecionado[0].trade_name,
      doc: cnpj_cpf ? cnpj_cpf : itemSelecionado[0].doc,
      doc_type: "cnpj",
      country: "Brazil",
      state: state ? state : itemSelecionado[0].state,
      city: city ? city : itemSelecionado[0].city,
      has_trial_balance: Boolean(data.balancete) === itemSelecionado[0].has_trial_balance ? Boolean(data.balancete) : itemSelecionado[0].has_trial_balance,
      is_rural: Boolean(data.produtorRural) === itemSelecionado[0].is_rural ? Boolean(data.produtorRural) : itemSelecionado[0].is_rural,
      data: {
        area_total: "here"
      },
      partners: modifiedPartners ? modifiedPartners : itemSelecionado[0].partners,
      branches: itemSelecionado[0].branches,
    }

    setModifiedPartners(modifiedPartners)
    setPartners(modifiedPartners);
    console.log(newData)

    // console.log(JSON.stringify(newData));
    // debugger
    editCompanie(newData, formId)
   };

   const onError: SubmitErrorHandler<any> = (errors) => {
    console.error(errors);
  };

  console.log(modifiedPartners)

  const isProdutorRural = watch('produtorRural');
  const isBalancete = watch('balancete');
  const isArrendada = watch('lease');
  const isTerraPropria = watch('ownLand');

  useEffect(() => {
    const calculatefreeArea = () => {
      const fullArea = parseFloat(watch('farms.0.fullArea')) || 0;
      const leasedArea = parseFloat(watch('farms.0.leasedArea')) || 0;
      const productivArea = parseFloat(watch('farms.0.productivArea')) || 0;

      let freeArea = fullArea - leasedArea - productivArea;
      freeArea = Math.max(0, freeArea); // Garante que a área livre não seja menor que zero
      setValue('farms.0.freeArea', freeArea.toString());
    };

    // Chama a função de cálculo sempre que houver uma alteração nas áreas relevantes
    calculatefreeArea();
  }, [watch('farms.0.fullArea'), watch('farms.0.leasedArea'), watch('farms.0.productivArea')]);

  const [isSocioModalOpen, setSocioModalOpen] = React.useState(false);
  const openSocioModal = () => setSocioModalOpen(true);
  const closeSocioModal = () => setSocioModalOpen(false);

  const [isSocioEditModalOpen, setSocioEditModalOpen] = React.useState(false);
  const openSocioEditModal = (index: number) => {
    setEditingPartnerIndex(index); // Defina o índice do sócio a ser editado
    setSocioEditModalOpen(true);
  };
  const closeSocioEditModal = () => setSocioEditModalOpen(false);

  const [partners, setPartners] = React.useState<Partner[]>([]);
  const removePartner = (index: number) => {
    const newPartnerList = partners.filter((_, i) => i !== index);
    setPartners(newPartnerList);
  };

  const [editingPartnerIndex, setEditingPartnerIndex] = React.useState<number | null>(null);
  const [payloadPartner, setPayloadPartner] = React.useState<any>(null);
  const handleSaveChanges = () => {
    const editedPartner: Partner = {
      doc: watch('partners.0.doc'),
      name: watch('partners.0.name'),
    };

    // Verifica se o índice do sócio editado está dentro dos limites do array
    if (editingPartnerIndex !== null && editingPartnerIndex >= 0 && editingPartnerIndex < partners.length) {
      const updatedPartners = [...partners]; // Cria uma cópia do array partners
      updatedPartners[editingPartnerIndex] = editedPartner; // Atualiza o elemento correspondente com os novos valores
      setPartners(updatedPartners); // Atualiza o estado partners com o novo array atualizado
      closeSocioEditModal(); // Fecha o modal de edição de sócio
    }
    setPayloadPartner(editedPartner)
    
  };


  React.useEffect(() => {
    // Atualiza itensTable sempre que partners for modificado
    // setItensTable(partners);
    setItensTable(modifiedPartners.length > 0 ? modifiedPartners : itemSelecionado[0].partners);
  }, [partners, editingPartnerIndex, modifiedPartners]);

  const [itensTable, setItensTable] = React.useState<any[]>([]);


  const [isFazendaModalOpen, setFazendaModalOpen] = React.useState(false);
  const openFazendaModal = () => setFazendaModalOpen(true);
  const closeFazendaModal = () => setFazendaModalOpen(false);

  const [farms, setFarms] = React.useState<any[]>([]);
  const removeFarm = (index: number) => {
    const newFarmList = farms.filter((_, i) => i !== index);
    setFarms(newFarmList);
  };

  const [isFazendaEditModalOpen, setFazendaEditModalOpen] = React.useState(false);
  const openFazendaEditModal = (index: any) => {
        setEditingFarmIndex(index);
        setFazendaEditModalOpen(true)
    }
  const closeFazendaEditModal = () => setFazendaEditModalOpen(false);

  const [editingFarmIndex, setEditingFarmIndex] = React.useState<number | null>(null);
  const handleSaveFarmsChanges = () => {
    const editedFarm: any = {
      doc: watch('farms.0.caepf'),
      nameFarm: watch('farms.0.nameFarm'),
      nameFarmPartner: watch('nameFarmPartner'),
      lease: watch('farms.0.lease'),
      ownLand: watch('farms.0.ownLand'),
      cityFazenda: watch('farms.0.cityFazenda'),
      ufFarm: watch('farms.0.ufFarm'),
      inscrEstadualFarm: watch('farms.0.inscrEstadualFarm'),
      fullArea: watch('farms.0.fullArea'),
      leasedArea: watch('farms.0.leasedArea'),
      productivArea: watch('farms.0.productivArea'),
      freeArea: watch('farms.0.freeArea'),
      // Adicione outros campos da fazenda conforme necessário
    };

    // Verifica se o índice do sócio editado está dentro dos limites do array
    if (editingFarmIndex !== null && editingFarmIndex >= 0 && editingFarmIndex < farms.length) {
      const updatedFarms = [...farms]; // Cria uma cópia do array Farms
      updatedFarms[editingFarmIndex] = editedFarm; // Atualiza o elemento correspondente com os novos valores
      setFarms(updatedFarms); // Atualiza o estado partners com o novo array atualizado
      closeSocioEditModal(); // Fecha o modal de edição de sócio
    }
  };

  const [itensTableFazenda, setItensTableFazenda] = React.useState<any[]>([]);

  React.useEffect(() => {
    // Atualiza itensTable sempre que farms for modificado
    // setItensTableFazenda(farms);
    setItensTableFazenda(itemSelecionado[0].branches);
  }, [farms, editingFarmIndex]);
  
  
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit(onSubmit, onError)}>

        <Flex gap={'5'}>
          <FormControl>
            <FormLabel>Razão Social</FormLabel>
            <Input {...register('legal_business_name')} placeholder={itemSelecionado[0].legal_business_name}/>
          </FormControl>
          <FormControl>
            <FormLabel>Apelido</FormLabel>
            <Input {...register('trade_name')} placeholder={itemSelecionado[0].trade_name}/>
          </FormControl>
          <FormControl>
            <FormLabel>CNPJ/CPF</FormLabel>
            <Input {...register('cnpj_cpf')} placeholder={itemSelecionado[0].doc}/>
          </FormControl>
          {/* <FormControl>
            <FormLabel>CAEPF</FormLabel>
            <Input {...register('caepf')} placeholder={itemSelecionado[0].caepf}/>
          </FormControl> */}
        </Flex>

        <Flex gap={'5'}>
          {/* <FormControl>
            <FormLabel>Inscrição Estadual</FormLabel>
            <Input {...register('inscrEstadualMaster')} placeholder={itemSelecionado[0].caepf}/>
          </FormControl> */}
          <FormControl>
            <FormLabel>Cidadde</FormLabel>
            <Input {...register('city')} placeholder={itemSelecionado[0].city}/>
          </FormControl>
          <FormControl>
            <FormLabel>Estado</FormLabel>
            <Input {...register('state')} placeholder={itemSelecionado[0].state}/>
          </FormControl>
          <FormControl>
            <FormLabel>Grupo</FormLabel>
            <Input {...register('name_group')} placeholder={itemSelecionado[0].group.name}/>
          </FormControl>
        </Flex>

        <Modal isOpen={isSocioModalOpen} onClose={closeSocioModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar Sócio</ModalHeader>
            <ModalBody>
              {/* Formulário para adicionar sócio */}
              <FormControl>
                <FormLabel>CPF do Sócio</FormLabel>
                <Input {...register('partners.0.doc')} />
              </FormControl>
              <FormControl>
                <FormLabel>name do Sócio</FormLabel>
                <Input {...register('partners.0.name')} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" type="submit" mr={3} onClick={() => { closeSocioModal() }}>
                Fechar
              </Button>
              <Button colorScheme="teal" onClick={() => {
                const newPartner = {
                  doc: watch('partners.0.doc'),
                  name: watch('partners.0.name'),
                };
                setPartners([...partners, newPartner]);
              }}>
                Adicionar Sócio
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isSocioEditModalOpen} onClose={closeSocioEditModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Sócio</ModalHeader>
            <ModalBody>
              {/* Formulário para adicionar sócio */}
              <FormControl>
                <FormLabel>CPF do Sócio</FormLabel>
                <Input {...register('partners.0.doc')} />
              </FormControl>
              <FormControl>
                <FormLabel>name do Sócio</FormLabel>
                <Input {...register('partners.0.name')} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" type="submit" mr={3} onClick={() => { closeSocioEditModal() }}>
                Fechar
              </Button>
              <Button colorScheme="teal" onClick={handleSaveChanges}>
                Salvar Alterações
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Flex>
          <FormControl>
            <FormLabel>Produtor Rural?</FormLabel>
            <HStack>
              <Radio
                {...register('produtorRural', { required: 'Campo obrigatório' })}
                value="true"
                isChecked={isProdutorRural === 'true'}
                onChange={() => setValue('produtorRural', 'true')}
              >
                Sim
              </Radio>
              <Radio
                {...register('produtorRural', { required: 'Campo obrigatório' })}
                value="false"
                isChecked={isProdutorRural === 'false'}
                onChange={() => setValue('produtorRural', 'false')}
              >
                Não
              </Radio>
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Possui Balancete?</FormLabel>
            <HStack>
              <Radio
                {...register('balancete', { required: 'Campo obrigatório' })}
                value="true"
                isChecked={isBalancete === 'true'}
                onChange={() => setValue('balancete', 'true')}
              >
                Sim
              </Radio>
              <Radio
                {...register('balancete', { required: 'Campo obrigatório' })}
                value="false"
                isChecked={isBalancete === 'false'}
                onChange={() => setValue('balancete', 'false')}
              >
                Não
              </Radio>
            </HStack>
          </FormControl>
        </Flex>

        <Button colorScheme="teal" onClick={openSocioModal}>
          Adicionar Sócio
        </Button>
        <>
          {itensTable.length > 0 && (
            <>
              <VStack spacing={4} align="stretch">
                {itensTable.map((itensTable, index) => (
                  <Badge key={index} p={2} colorScheme="teal">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Box>
                        <strong>Sócio:</strong> {' '}
                        {itensTable.name}
                      </Box>
                      <Box>
                        <strong>CPF:</strong> {' '}
                        {itensTable.doc}
                      </Box>
                      <Flex gap={5}>
                        <Button colorScheme="teal" onClick={() => openSocioEditModal(index)}>Editar</Button>
                        <Button colorScheme="teal" onClick={() => removePartner(index)}>Remover</Button>
                      </Flex>
                    </Flex>
                  </Badge>
                ))}
              </VStack>
            </>
          )}
        </>

        {/* Mostra os campos relacionados apenas se a resposta for "Sim" */}
        {isProdutorRural === 'true' && (
          <>
            <Button colorScheme="teal" onClick={openFazendaModal}>
              Adicionar Fazenda
            </Button>
          </>
        )}

        <Modal isOpen={isFazendaModalOpen} onClose={closeFazendaModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar Fazenda</ModalHeader>
            <ModalBody>
              {/* Formulário para adicionar fazenda */}
              <Flex mb={'10'}>
                <FormControl>
                  <FormLabel>Arrendado ?</FormLabel>
                  <HStack>
                    <Radio
                      {...register('lease', { required: 'Campo obrigatório' })}
                      value="true"
                      isChecked={isArrendada === 'true'}
                      onChange={() => setValue('lease', 'true')}
                    >
                      Sim
                    </Radio>
                    <Radio
                      {...register('lease', { required: 'Campo obrigatório' })}
                      value="false"
                      isChecked={isArrendada === 'false'}
                      onChange={() => setValue('lease', 'false')}
                    >
                      Não
                    </Radio>
                  </HStack>
                </FormControl>
                <FormControl>
                  <FormLabel>Terra Própria ?</FormLabel>
                  <HStack>
                    <Radio
                      {...register('ownLand', { required: 'Campo obrigatório' })}
                      value="true"
                      isChecked={isTerraPropria === 'true'}
                      onChange={() => setValue('ownLand', 'true')}
                    >
                      Sim
                    </Radio>
                    <Radio
                      {...register('ownLand', { required: 'Campo obrigatório' })}
                      value="false"
                      isChecked={isTerraPropria === 'false'}
                      onChange={() => setValue('ownLand', 'false')}
                    >
                      Não
                    </Radio>
                  </HStack>
                </FormControl>
              </Flex>
              <FormControl>

                <FormControl>
                  <FormLabel>name da Fazenda</FormLabel>
                  <Input {...register('farms.0.nameFarm')} />
                </FormControl>

                <FormControl>
                  <FormLabel>name do sócio</FormLabel>
                  <Select
                    placeholder="Selecione um sócio"
                    {...register("nameFarmPartner")}
                    onChange={(e) => setValue("nameFarmPartner", e.target.value)}
                  >
                    {partners.map((partner, index) => (
                      <option key={index} value={partner.name}>
                        {partner.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>CAEPF</FormLabel>
                  <Input {...register('farms.0.caepf')} />
                </FormControl>

                <FormLabel>Cidade</FormLabel>
                <Input {...register('farms.0.cityFazenda')} />
              </FormControl>
              <FormControl>
                <FormLabel>UF</FormLabel>
                <Input {...register('farms.0.ufFarm')} />
              </FormControl>
              <FormControl>
                <FormLabel>Incrição Estadual</FormLabel>
                <Input {...register('farms.0.inscrEstadualFarm')} />
              </FormControl>
              <FormControl>
                <FormLabel>Área Total</FormLabel>
                <Input {...register('farms.0.fullArea')} />
              </FormControl>
              {isArrendada === 'true' && (
                <FormControl>
                  <FormLabel>Área Arrendada</FormLabel>
                  <Input {...register('farms.0.leasedArea')} />
                </FormControl>
              )}
              <FormControl>
                <FormLabel>Área Produtiva</FormLabel>
                <Input {...register('farms.0.productivArea')} />
              </FormControl>
              <FormControl>
                <FormLabel>Área Livre</FormLabel>
                <Input disabled={true} {...register('farms.0.freeArea')} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={() => closeFazendaModal()}>
                Fechar
              </Button>
              <Button colorScheme="teal" type="submit" onClick={() => {
                const novaFazenda = {
                  lease: watch('lease'),
                  ownLand: watch('ownLand'),
                  nameFarm: watch('farms.0.nameFarm'),
                  nameFarmPartner: watch('nameFarmPartner'),
                  caepf: watch('farms.0.caepf'),
                  cityFazenda: watch('farms.0.cityFazenda'),
                  ufFarm: watch('farms.0.ufFarm'),
                  inscrEstadualFarm: watch('farms.0.inscrEstadualFarm'),
                  fullArea: watch('farms.0.fullArea'),
                  leasedArea: watch('farms.0.leasedArea'),
                  productivArea: watch('farms.0.productivArea'),
                  freeArea: watch('farms.0.freeArea'),
                  // Adicione os demais campos da fazenda aqui
                };
                setFarms([...farms, novaFazenda]);
                closeFazendaModal();
              }}>
                Adicionar Fazenda
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isFazendaEditModalOpen} onClose={closeFazendaEditModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Fazenda</ModalHeader>
            <ModalBody>
              {/* Formulário para adicionar fazenda */}
              <Flex mb={'10'}>
                <FormControl>
                  <FormLabel>Arrendado ?</FormLabel>
                  <HStack>
                    <Radio
                      {...register('lease', { required: 'Campo obrigatório' })}
                      value="true"
                      isChecked={isArrendada === 'true'}
                      onChange={() => setValue('lease', 'true')}
                    >
                      Sim
                    </Radio>
                    <Radio
                      {...register('lease', { required: 'Campo obrigatório' })}
                      value="false"
                      isChecked={isArrendada === 'false'}
                      onChange={() => setValue('lease', 'false')}
                    >
                      Não
                    </Radio>
                  </HStack>
                </FormControl>
                <FormControl>
                  <FormLabel>Terra Própria ?</FormLabel>
                  <HStack>
                    <Radio
                      {...register('ownLand', { required: 'Campo obrigatório' })}
                      value="true"
                      isChecked={isTerraPropria === 'true'}
                      onChange={() => setValue('ownLand', 'true')}
                    >
                      Sim
                    </Radio>
                    <Radio
                      {...register('ownLand', { required: 'Campo obrigatório' })}
                      value="false"
                      isChecked={isTerraPropria === 'false'}
                      onChange={() => setValue('ownLand', 'false')}
                    >
                      Não
                    </Radio>
                  </HStack>
                </FormControl>
              </Flex>
              <FormControl>

                <FormControl>
                  <FormLabel>name da Fazenda</FormLabel>
                  <Input {...register('farms.0.nameFarm')} />
                </FormControl>

                <FormControl>
                  <FormLabel>name do sócio</FormLabel>
                  <Select
                    placeholder="Selecione um sócio"
                    {...register("nameFarmPartner")}
                    onChange={(e) => setValue("nameFarmPartner", e.target.value)}
                  >
                    {partners.map((partner, index) => (
                      <option key={index} value={partner.name}>
                        {partner.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>CAEPF</FormLabel>
                  <Input {...register('farms.0.caepf')} />
                </FormControl>

                <FormLabel>Cidade</FormLabel>
                <Input {...register('farms.0.cityFazenda')} />
              </FormControl>
              <FormControl>
                <FormLabel>UF</FormLabel>
                <Input {...register('farms.0.ufFarm')} />
              </FormControl>
              <FormControl>
                <FormLabel>Incrição Estadual</FormLabel>
                <Input {...register('farms.0.inscrEstadualFarm')} />
              </FormControl>
              <FormControl>
                <FormLabel>Área Total</FormLabel>
                <Input {...register('farms.0.fullArea')} />
              </FormControl>
              {isArrendada === 'true' && (
                <FormControl>
                  <FormLabel>Área Arrendada</FormLabel>
                  <Input {...register('farms.0.leasedArea')} />
                </FormControl>
              )}
              <FormControl>
                <FormLabel>Área Produtiva</FormLabel>
                <Input {...register('farms.0.productivArea')} />
              </FormControl>
              <FormControl>
                <FormLabel>Área Livre</FormLabel>
                <Input disabled={true} {...register('farms.0.freeArea')} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={() => closeFazendaEditModal()}>
                Fechar
              </Button>
              <Button colorScheme="teal" type="submit" onClick={handleSaveFarmsChanges}>
                Salvar alterações Fazenda
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {itensTableFazenda.length > 0 && (
          <>
            <VStack spacing={4} align="stretch">
              {itensTableFazenda.map((itensTableFazenda, index) => (
                <Badge key={index} p={2} colorScheme="teal">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                      <strong>Fazenda:</strong> {' '}
                      {itensTableFazenda.legal_business_name}
                    </Box>
                    <Box>
                      <strong>Cidade:</strong> {' '}
                      {itensTableFazenda.city}
                    </Box>
                    <Flex gap={5}>
                      <Button colorScheme="teal" onClick={()=> openFazendaEditModal(index)}>Editar</Button>
                      <Button colorScheme="teal" onClick={() => removeFarm(index)}>Remover</Button>
                    </Flex>
                  </Flex>
                </Badge>
              ))}
            </VStack>
          </>
        )}

        {/* Demais campos do formulário */}
        <Button colorScheme="teal" type="submit">
          Atualizar
        </Button>
        <ToastContainer theme="colored" />
      </VStack>
    </Box>
  );
};


