"use client";
import { EditIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
  Box,
} from "@chakra-ui/react";
import { FullDrawerEdit } from "../FullDrawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditDelete = ({ title, id, deleteUser, deleteCompanie, deleteCrop, deleteHarvest, deletePlot, name }: any) => {
  const handleClick = (id: any) => {
    switch (title) {
      case "Usuários":
        if (deleteUser) {
          deleteUser(id);
        }
        break;
      case "Empresas":
        if (deleteCompanie) {
          deleteCompanie(id);
        }
        break;
      case "Safra":
        if (deleteCrop) {
          deleteCrop(id);
        }
        break;
      case "Cultura":
        if (deleteHarvest) {
          deleteHarvest(id);
        }
        break;
      case "Talhão":
        if (deletePlot) {
          deletePlot(id);
        }
        break;
      default:
        // para lidar com outros títulos ou não fazer nada
        alert('lógica para deletar em construção')
        break;
    }
  };

  return (
    // <Menu>
    //   <MenuButton
    //     as={IconButton}
    //     aria-label="Options"
    //     icon={<HamburgerIcon />}
    //     variant="outline"
    //   />
    //   <MenuList>
    //     <Flex flexDir={"column"} gap={"1px"}>
    //       <Flex ml={"3%"} alignItems={"center"}>
    //         <EditIcon />
    //         <FullDrawerEdit title={title} id={id} name={name} />
    //       </Flex>
    //       <Flex ml={"3%"} alignItems={"center"}>
    //         <DeleteIcon />
    //         <Box mr={'8%'} bg={"transparent"}>
    //           <ModalDelete id={id} title={title} name={name} handleClick={handleClick}/>
    //         </Box>
    //       </Flex>
    //     </Flex>
    //   </MenuList>
    // </Menu>
    <Menu>
        <Flex flexDir={"column"} gap={"1px"}>
          <Flex ml={"40%"} alignItems={"center"}>
            <DeleteIcon />
            <Box mr={'8%'} bg={"transparent"}>
              <ModalDelete id={id} title={title} name={name} handleClick={handleClick}/>
            </Box>
          </Flex>
        </Flex>
    </Menu>
  );
};

function ModalDelete({id, title, name, handleClick}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} bg={'transparent'}>Deletar {title}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deletar {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Confirma a remoção da {name} ?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme='red' onClick={() => handleClick(id)}>Remover</Button>
            <ToastContainer theme="colored" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditDelete;
