import React, { useState } from 'react'
import { Box, Image, Flex, Button } from '@chakra-ui/react' 
import { StarIcon, CheckIcon } from "@chakra-ui/icons";

const LOCAL_STORAGE_KEY = 'moviesInfoData';

function MovieList(props) {
    const {
        Title,
        Year,
        Poster,
        imdbID,
        showMovieWatched,
        setBookMarkList,
    } = props
    const bookMarkedMoviesList = localStorage.getItem(LOCAL_STORAGE_KEY + 'bookmarked') ?
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY + 'bookmarked')) : [];
    const watchedMovieList = localStorage.getItem(LOCAL_STORAGE_KEY + 'watched') ?
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY + 'watched')) : [];
    const [hoverMovie, setHoverMovie] = useState(false);
    const [likedMovieIconColor, setLikedMovieIconColor] = useState(bookMarkedMoviesList.includes(Title) ? 'red' : 'yellow');
    const [watchedMovieIconColor, setWatchedMovieIconColor] = useState(watchedMovieList.includes(Title) ? 'red' : 'white'); 
    

    function over(e) {
        setHoverMovie(true);
    }
    function out(e) {
        setHoverMovie(false);
    }

    function handleAddToBookMark() {
        if (!bookMarkedMoviesList.includes(Title)) {
            setLikedMovieIconColor('red');
            const bookMarkedMovies = localStorage.getItem(LOCAL_STORAGE_KEY) ?
            JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : []
            bookMarkedMovies.push({ Title, Year, Poster, imdbID });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookMarkedMovies))
            localStorage.setItem(LOCAL_STORAGE_KEY + 'bookmarked', JSON.stringify([...bookMarkedMoviesList, Title]))
        }
    }

    function handleMarkMovieAsWatched() {
        if (!watchedMovieList.includes(Title)) {
            setWatchedMovieIconColor('red');
            localStorage.setItem(LOCAL_STORAGE_KEY + 'watched', JSON.stringify([...watchedMovieList, Title]))
        }
    }

    function handleRemoveLikedMovie() {
        const bookMarkedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        let filteredMovieList = bookMarkedMovies.filter(function (el) {
            return el['imdbID'] !== imdbID;
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredMovieList))
        let filteredTitle = [...bookMarkedMoviesList.filter(t => t !== Title)];
        localStorage.setItem(LOCAL_STORAGE_KEY + 'bookmarked', JSON.stringify(filteredTitle))
        setBookMarkList(filteredMovieList);
    }
    
    return (
        <Box
            onMouseOver={over}
            onMouseOut={out}
        >
            <Box h="100%" w="100%" pos='relative' fontWeight='600' fontSize={{ base: '1.5rem', md: '1.3rem', lg: '1rem'}}>
                <Image
                    objectFit='cover'
                    src={Poster}
                    h='80%'
                    w='100%'
                />
                {Title} - {Year}
                <Box>
                    <Flex display={hoverMovie? "flex": "none"} pos="absolute" left='10%' top='10%' w='80%' h='60%' bgColor='RGBA(0, 0, 0, 0.5)' alignItems='center' justifyContent='center'>
                        {showMovieWatched ?
                            <CheckIcon
                                _hover={{cursor: 'pointer'}}
                                onClick={handleMarkMovieAsWatched}
                                w={12} h={12}
                                color={watchedMovieIconColor}
                            /> :
                            <StarIcon
                                _hover={{cursor: 'pointer'}}
                                onClick={handleAddToBookMark}
                                w={12} h={12}
                                color={likedMovieIconColor}
                            />
                        }
                    </Flex>
                </Box>
                {showMovieWatched &&
                    <Button
                        p={2}
                        onClick={handleRemoveLikedMovie}
                    >
                        Remove From BookMark
                    </Button>}
            </Box>
        </Box>
    )
}

export default MovieList