import { Button, Flex } from "@chakra-ui/react";
import {FullDrawer} from "../FullDrawer";

const AddAndUpload = ({title}: any) => {
  return (
    <>
      <Flex mt={'2%'} gap={'1%'}>
        <FullDrawer title={title}/>
      </Flex>
    </>
  );
};

export default AddAndUpload;
