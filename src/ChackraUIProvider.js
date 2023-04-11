import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BaseTheme } from './theme/BaseTheme'

const ChackraUIProvider = ({ children }) => {
    return (
        <ChakraProvider theme={BaseTheme}>{children}</ChakraProvider>
    )
}

export default ChackraUIProvider