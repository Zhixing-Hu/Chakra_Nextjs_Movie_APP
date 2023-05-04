"use client"
import SearchBar from "@/app/components/SearchBar"
import { Box, Text } from "@chakra-ui/react"
import { SunIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box>
      <SunIcon w={12} h={12} p={2} />
      <Text as="span" fontWeight={600}>Amazing Movie</Text>
      <SearchBar />
    </Box>
  )
}
