"use client"
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}

