// app/providers.tsx
"use client"

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema do PrimeReact
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // ícones
import 'primeflex/primeflex.css';


export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <PrimeReactProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </PrimeReactProvider>
    </CacheProvider>
  )
}