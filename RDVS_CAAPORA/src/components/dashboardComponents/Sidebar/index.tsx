'use client'
import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import {
  FcDocument,
  FcFinePrint,
  FcFactory,
  FcDepartment,
  FcBusinessman,
  FcPositiveDynamic,
  FcSettings,
  FcPrivacy,
  FcKey,
} from "react-icons/fc";
import { IconType } from "react-icons";
import { ReactText } from "react";

const Logo = (props: any) => {
  return (
    <Box boxSize="35%">
      <Link href="/">
        <Image src="/Logo2_bg_none.png" />
      </Link>
    </Box>
  );
};

interface SubMenu {
  name: string;
  path: string;
  subMenu?: SubMenu[];
}

interface LinkItemProps {
  name: string;
  icon: ReactNode;
  pathName: string;
  subMenu: SubMenu[];
}
const LinkItems: Array<LinkItemProps> = [
  {
    name: "Empresas",
    icon: <FcFactory />,
    pathName: "/companies",
    subMenu: [{ name: "Lista de Empresas", path: "/registerCompanie" }],
  },
  {
    name: "Cadastros",
    icon: <FcKey />,
    pathName: "/certificate",
    subMenu: [
      // { name: "Importar Balancetes", path: "/registerStandardChatAccounts" },
      // { name: "DRE Gerencial", path: "#" },
      // { name: "DMPL", path: "#" },
      // { name: "DFC", path: "#" },
      // { name: "Razão", path: "/registerLedger" },
      { name: "Balancetes", path: "/registerConversion" },
      { name: "Safra", path: "/registerCrop" },
      { name: "Cultura", path: "/registerHarvest" },
      { name: "Talhão", path: "/registerPlot" },
    ],
  },
  {
    name: "Demonstrações Contábeis",
    icon: <FcFinePrint />,
    pathName: "/users",
    subMenu: [
      { name: "Balanço", path: "/Teste" },
      { name: "DRE", path: "/DRE" },
      { name: "DMPL", path: "/DMPL" },
      { name: "DFC", path: "#" },
      { name: "Notas Explicativas", path: "#" },
      { name: "DRE Podutor", path: "/DRE_RuralProducer" },
      { name: "LCDPR", path: "/LCDPR" },
      // { name: "Financeiros", path: "/financialMetrics" },
      // { name: "Rentabilidade", path: "/profitabilityMetrics" },
      // { name: "Investimentos", path: "/investmentsMetrics" },
      // { name: "Estratégicos", path: "#", subMenu:[
      //   { name: "Clientes", path: "#" },
      //   { name: "Fornecedores", path: "#" },
      //   { name: "Representatividade", path: "#" },
      // ] },
    ],
  },
  {
    name: "Indicadores",
    icon: <FcPositiveDynamic />,
    pathName: "/users",
    subMenu: [
      // { name: "DRE Podutor", path: "/DRE" },
      // { name: "DRE", path: "#" },
      // { name: "LCDPR", path: "/LCDPR" },
      { name: "Financeiros", path: "/financialMetrics" },
      { name: "Rentabilidade", path: "/profitabilityMetrics" },
      { name: "Investimentos", path: "/investmentsMetrics" },
      {
        name: "Estratégicos", path: "#", subMenu: [
          { name: "Clientes", path: "#" },
          { name: "Fornecedores", path: "#" },
          { name: "Representatividade", path: "#" },
          { name: "Comerciais", path: "#" },
        ]
      },
    ],
  },

  {
    name: "Settings",
    icon: <FcSettings />,
    pathName: "/settings",
    subMenu: [
      { name: "Usuários", path: "/registerUser" },
      { name: "Acessos", path: "/listUsers" },
    ],
  },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} >
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          alignItems="center"
        >
          <Logo color={useColorModeValue("gray.700", "white")} />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box
        _hover={{ bg: "cyan.400", color: "white" }}
        mb={"7%"}
        display={"flex"}
        ml={"7%"}
        alignItems={"center"}
      >
        <FcDepartment />
        <Link href={"/dash"} ml={"7%"}>
          <Text as={"span"}>Home</Text>
        </Link>
      </Box>
      <NavMenu />
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  pathName: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const RenderSubMenu = ({ subMenu }: { subMenu: SubMenu[] }) => {
  return (
    <>
      {subMenu.map((item) => (
        <AccordionItem key={item.name} border={"none"}>
          <AccordionButton bg={"transparent"} _hover={{ bg: "cyan.400", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              <Link href={item.path}>{item.name}</Link>
            </Box>
            {item.subMenu && <AccordionIcon />}
          </AccordionButton>
          {item.subMenu && (
            <AccordionPanel pb={4} color={"red"} ml={"18%"} >
              <RenderSubMenu subMenu={item.subMenu} />
            </AccordionPanel>
          )}
        </AccordionItem>
      ))}
    </>
  );
};

const NavMenu = () => {
  return (
    <>
      {LinkItems.map((elem) => (
        <Accordion key={elem.name} allowMultiple>
          <AccordionItem border={"none"}>
            <AccordionButton bg={"transparent"} _hover={{ bg: "cyan.400", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                <Flex alignItems={"center"} justifyContent={"start"} gap={"3"}>
                  {elem.icon}
                  <Text as={"span"}>{elem.name}</Text>
                </Flex>
              </Box>
              {elem.subMenu && <AccordionIcon />}
            </AccordionButton>
            {elem.subMenu && (
              <AccordionPanel pb={4} color={"red"} ml={"18%"}>
                <RenderSubMenu subMenu={elem.subMenu} />
              </AccordionPanel>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};