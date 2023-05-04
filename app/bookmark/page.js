"use client"
import React, { useState } from 'react'
import MovieList from '../components/movieList'
import Link from 'next/link'
import { Box, Button, Grid, Text } from "@chakra-ui/react"
import { SunIcon } from "@chakra-ui/icons";

const LOCAL_STORAGE_KEY = 'moviesInfoData';
export default function Page() {
  let tempBookMarkList;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    tempBookMarkList = localStorage.getItem(LOCAL_STORAGE_KEY);
  }
  const [bookMarkList, setBookMarkList] = useState(
    tempBookMarkList ?
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : []
  )
  
  return (
    <Box>
      <SunIcon w={12} h={12} p={2} />
      <Text as="span" fontWeight={600}>Amazing Movie</Text>
      <Box>
        <Button left={{base: '40vw', md: '70vw', lg: '80vw'}}>
          <Link href="/">Back to Home Page</Link>
        </Button>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6} padding={5}>
          {bookMarkList && bookMarkList.map((item) => 
            <MovieList
              key={ item['imdbID'] }
              {...item}
              showMovieWatched={true}
              setBookMarkList={setBookMarkList}
            />
          )}
          </Grid>
      </Box>
    </Box>
    
  )
}

