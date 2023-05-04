import React, { useState } from "react";
import {
  Button,
  Grid,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Search2Icon } from "@chakra-ui/icons";
import MovieList from "./movieList";

export default function SearchBar() {
  const [movieTitle, setMovieTitle] = useState("");
  const [resultList, setResultList] = useState([]);
  const [titleSort, setTitleSort] = useState(0);
  const [yearSort, setYearSort] = useState(0);

  function handleSearchChange(event) {
    setMovieTitle(event.target.value);
  }

  async function handleSearchResult(e) {
    e.preventDefault();
    try {
      const response = await fetch(`/api/search?q=${movieTitle}`);
      const movieData = await response.json();
      let moviesInfo = movieData.data.Search;
      setResultList(moviesInfo);
    } catch (error) {
      console.error(error);
    }
    
  }

  const movieLists = resultList? resultList.map((item) => 
    <MovieList
      key={item['imdbID']}
      {...item}
    />
  ): 'Please enter correct movie title';


  function handleTitleSort() {
    const sortMovies = [...resultList]
    if (titleSort === 0 || titleSort === 1) {
      
      sortMovies.sort((a,b) => {return b['Title'].localeCompare(a['Title']);})
      setTitleSort(2)
      setYearSort(0)
    }
    else{
      sortMovies.sort((a,b) => {return a['Title'].localeCompare(b['Title']);})
      setTitleSort(1)
      setYearSort(0)
    }
    setResultList([...sortMovies])
  }

  function handleYearSort() {
    let sortMovies = [...resultList]
    
    if (yearSort === 0 || yearSort === 1) {
      sortMovies.sort((a,b) => {return new Date(b['Year']) - new Date(a['Year']);})
      setYearSort(2)
      setTitleSort(0)
    }
    else{
      sortMovies.sort((a,b) => {return new Date(a['Year']) - new Date(b['Year']);})
      setYearSort(1)
      setTitleSort(0)
    }
    
    setResultList([...sortMovies])
  }

  return (
    <>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Search Movies..."
          value={movieTitle}
          onChange={handleSearchChange}
          border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button
            onClick={handleSearchResult}
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      <Stack direction='row' spacing={4} align='center' padding={2}>
        <Button
          colorScheme='teal' variant='solid'
          onClick={() => handleTitleSort()}>
          Sort By Title
          {titleSort > 0? (
            titleSort === 1 ? (
              <ChevronUpIcon ml={1} w={4} h={4} />
            ) : (
              <ChevronDownIcon ml={1} w={4} h={4} />
            )
          ) : (
              ""
          )}  
        </Button>
        <Button
          colorScheme='teal' variant='solid'
          onClick={() => handleYearSort()}>
          Sort By Year
          {yearSort > 0? (
            yearSort === 1 ? (
              <ChevronUpIcon ml={1} w={4} h={4} />
            ) : (
              <ChevronDownIcon ml={1} w={4} h={4} />
            )
          ) : (
              ""
          )}  
        </Button>
        <Button colorScheme='teal' variant='solid'>
          <Link href="/bookmark">
            BookMark
          </Link>
        </Button>
      </Stack>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6} padding={5}>
            {movieLists}
      </Grid>
    </>
  );
};
