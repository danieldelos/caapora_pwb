'use client'
import { Input, Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

function SearchComponent({searchTerm, onSearchChange }: any) {
    return (
        <Flex p={1} bg={'white'} borderRadius={'2%'}>
            <Input value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} placeholder={'Buscar dados...'} border={'none'}/>
            <Button bg={'transparent'}><FcSearch/></Button>
        </Flex>
    );
}

export default SearchComponent;
 