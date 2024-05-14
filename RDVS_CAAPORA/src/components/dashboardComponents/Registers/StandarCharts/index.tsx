import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Link,
  Stack,
} from "@chakra-ui/react";
import { companieContext } from "@/context/companieContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import TableSScrop from "../../TableSSCrop";
import TableBalancete from "../../TableBalancete";
import TablePaginator from "../../TableTeste";

const title = 'Contas'
// const title = 'Balancete'
const headerTable = [{ column1: 'Conta Cliente', column2: 'Descrição' }]
const footerTable = headerTable

const titleSSCROP = 'SSCROP'
// const title = 'Balancete'
const headerTableSSCROP = [{
  column1: 'Doc type name',
  column2: 'Category name',
  column3: 'Subcategory name',
}]
const footerTableSSCROP = headerTableSSCROP



const StandardChartsFile = () => {
  const { addBalanceSSCROP, setSystem, temp, processBlc, addSSCROP, imports }: any = useContext(companieContext);
  const { count, system, balance, idFromTo }: any = useContext(companieContext);
  const data = balance.length > 0 ? balance[0].combinationsFile : []
  const [searchTerm, setSearchTerm] = useState('');
  const itensTable = count && count
  const novoArray = itensTable.map(({ code, description }: any) => ({ code, description }))
    .filter((elem: any) => elem.description.toLowerCase().includes(searchTerm.toLowerCase()) || elem.code.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((elem: any) => {
      return ({ item1: String(elem.code), item2: elem.description })
    });

  console.log(imports)
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('import_class', data.import_class);

    if (data.competency_id) {
      formData.append('competency_id', data.competency_id);
    }

    addBalanceSSCROP(formData)
  };

  const [selectedOption, setSelectedOption] = useState("padrao");
  const handleChange = (event: { target: { value: any; }; }) => {
    setSelectedOption(event.target.value);
  };
  setSystem(selectedOption)

  const [load, setLoad] = useState<any[]>([0])
  useEffect(() => {
    if (temp.id_import > 0) {
      setLoad(temp.id_import)
    } else {

    }
  }, [temp])


  const handleFromto = () => {

    // processBlc(temp)
    addSSCROP(temp)
  }

  const handleProcess = () => {

    processBlc(temp)

  }

  return (
    <>
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            borderWidth="1px"
            bg={"white"}
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={'100%'}
            p={5}
            m="10px auto"
          >
            <Flex direction={'row'} alignItems={'center'} justify={'space-between'} gap={'4'}>
              <FormLabel>Importação Balancete</FormLabel>
              <Select required={true} placeholder={'Selecione um Sistema'} value={selectedOption} w={'15%'} {...register("import_class")} onChange={handleChange}>
                <option value="padrao">PADRÃO</option>
                <option value="SSCROP">SSCROP</option>
              </Select>
              <Select placeholder={'Selecione uma Competência'} w={'15%'} {...register("competency_id")}>
                <option value="1">03-2024</option>
              </Select>
              <label htmlFor="file-upload" >
                <Input id="file-upload" type="file" {...register("file")} />
              </label>

              <Button type="submit" colorScheme="blue">
                Upload
              </Button>

              <Button onClick={handleFromto} colorScheme="blue">
                Carregar de para
              </Button>

              <Button onClick={handleProcess} colorScheme="blue">
                Processar
              </Button>
   
              <ToastContainer theme="colored" />
            </Flex>
          </Box>
        </form>
      </FormControl>

      {system === 'SSCROP' && (
        <>
          {/* <ContasConciliacao /> */}
          <h1>sscrop</h1>
          <TablePaginator/>
          {/* <TableSScrop idFromTo={idFromTo} headerTable={headerTableSSCROP} itensTable={balance.length > 0 ? balance[0].combinationsFile : []} optionSelect={balance.length > 0 ? balance[0].typesAccount : []} /> */}
        </>
      )}

      {/* {system === 'padrao' && (
        <>
          <TableBalancete headerTable={headerTable} footerTable={footerTable} itensTable={novoArray} title={title} optionSelect={count} />
        </>
      )} */}


    </>
  );



};

export default StandardChartsFile;
