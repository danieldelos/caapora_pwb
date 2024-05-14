"use client";
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
} from "@chakra-ui/react";
import React from "react";
import FormEditUser from "../FormEditUser";
import { FcRefresh } from "react-icons/fc";

const EditUser = ({name, id}: any) => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  //   const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const sizes = ["full"];
  return (
    <>
      {sizes.map((size) => (
        <Button onClick={() => handleClick(size)} key={size} >
          <FcRefresh/>
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{name}</DrawerHeader>
          <DrawerBody>
            <FormEditUser id={id}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditUser;
