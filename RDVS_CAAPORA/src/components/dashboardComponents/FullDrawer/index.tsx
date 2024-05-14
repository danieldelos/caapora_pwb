"use Client";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import RegisterCompanie from "../Registers/Companie";
import RegisterUserComponent from "../Registers/Users";
import FormEditUser from "../Users/FormEditUser";
import FormEditCompanie from "../FormsEdit/Companie";
import RegisterCrop from "../Registers/Crop";
import FormEditCrop from "../FormsEdit/Crop";
import RegisterHarvest from "../Registers/Harvest";
import FormEditHarvest from "../FormsEdit/harvest";
import RegisterPlot from "../Registers/Plot";
import FormEditPlot from "../FormsEdit/Plot";
import StandardChartsFile from "../Registers/StandarCharts";
import MapAccounts from "../Registers/FromTo";
import LedgerSheetFile from "../Registers/LedgerSheet";
import ConversionSheetFile from "../Registers/Conversion";
import RegisterCompanieComponent from "../Registers/Companie";
import CompanyForm from "../Registers/testeRegister";



function FullDrawer({ title }: any) {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const COMPONENT_MAP: any = {
    Usuários: RegisterUserComponent,
    // Empresas: RegisterCompanie,
    // Empresas: RegisterCompanieComponent,
    Empresas: CompanyForm,
    Safra: RegisterCrop,
    Cultura: RegisterHarvest,
    Talhão: RegisterPlot,
    // Standard: StandardChartsFile,
    Razão: LedgerSheetFile,
    Conversão: ConversionSheetFile,
    Balancetes: StandardChartsFile,
    "Plano de contas Padrão": () => <h1>Em construção</h1>,
  };

  const ComponentToRender =
    COMPONENT_MAP[title] ||
    (() => (
      <Flex gap={5}>
        <span> Formulário em construção</span>
      </Flex>
    ));

  const handleClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["full"];

  return (
    <>
      {sizes.map((size) => (
        <Button onClick={() => handleClick(size)} key={size} colorScheme="blue">
          {title === "Balancete"
            ? `Importar  ${title}`
            : `Upload  ${title}`}{" "}
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`Cadastrar ${title}`}</DrawerHeader>
          <DrawerBody>
            <ComponentToRender />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// =====================================================Formulário de edição================================================
function FullDrawerEdit({ title, id, name }: any) {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const EDIT_COMPONENT_MAP: any = {
    Usuários: (id: any) => <FormEditUser id={id} />,
    Empresas: (id: any) => <FormEditCompanie id={id} />,
    Safra: (id: any) => <FormEditCrop id={id} />,
    Cultura: (id: any) => <FormEditHarvest id={id} />,
    Talhão: (id: any) => <FormEditPlot id={id} />,
    Standard: MapAccounts,
    "Plano de contas Padrão": () => <h1>ação em execução</h1>,
  };

  const ComponentToRender =
    EDIT_COMPONENT_MAP[title] ||
    (() => (
      <Flex gap={5}>
        {/* <IoIosConstruct /> */}
        <span> Formulário em construção</span>
      </Flex>
    ));

  const handleClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["full"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          bg={"transparent"}
        >{`Editar  ${title}`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Editar: {name}</DrawerHeader>
          <DrawerBody>{ComponentToRender(id)}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { FullDrawer, FullDrawerEdit };
