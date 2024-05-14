import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import { companieContext } from "@/context/companieContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StandardChartsFile = () => {
  const [selectedFile, setSelectedFile] = React.useState();
  const [isSelected, setIsSelected] = React.useState(false);
  const [selectedCompany, setSelectedCompany] = React.useState();
  const [password, setPassword] = React.useState();
  const [fileName, setFileName] = React.useState("");
  const fileInputRef: any = React.useRef(null);
  const { addChartAccounting }: any = useContext(companieContext);

  const handleCompanyChange = (event: any) => {
    setSelectedCompany(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setIsSelected(true);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error("Nenhum arquivo selecionado!");
      return;
    }

    const formData: any = new FormData();
    formData.append("file", selectedFile);

    // Adiciona o planId ao formData
    formData.append("plano_contas", "1");

    addChartAccounting(formData);
  };

  const handleFileButtonClick = () => {
    // Adicione esta função para lidar com o clique no botão
    fileInputRef.current.click();
  };

  return (
    <Box
      borderWidth="1px"
      bg={"white"}
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
      as="form"
    >
      <FormControl mt={"3%"}>
        <FormLabel>Plano de contas Padrão</FormLabel>
        <Input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <Button onClick={handleFileButtonClick} colorScheme="teal" size="md">
          Selecione o Plano de Contas
        </Button>
        {fileName && (
          <Text ml={"3%"} as={"span"}>
            Arquivo selecionado: {fileName}
          </Text>
        )}
        <Flex mt={"3%"} justify={"space-between"}>
          <Link href="#">Downlod do modelo</Link>
          <Button colorScheme="blue" onClick={handleUpload}>
            Upload
          </Button>
          <ToastContainer theme="colored" />
        </Flex>
      </FormControl>
    </Box>
  );
};

export default StandardChartsFile;
