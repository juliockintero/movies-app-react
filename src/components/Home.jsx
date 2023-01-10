//Packages
import React, { useEffect, useState, useContext, createContext } from 'react'
import { useParams } from 'react-router-dom'

//Compononents
import CardComponent from './CardComponent'
import Navbar from './Navbar'
import { Button } from '@mui/material'

export const ThemeContext = createContext("");


const Home = () => {

    let paramsIds = useParams()
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState([])

    // console.log('genero' + genre.id)

    const apiKey = 'api_key=dbe3dee6c438945702b17bc1d73cf530'
    const baseUrl = 'https://api.themoviedb.org/3/'
    let apiUrl

    if (paramsIds.id === undefined) {
        apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey + '&page=' + page
    } else {
        apiUrl = `${baseUrl}discover/movie?${apiKey}&with_genres=${paramsIds.id}&page=${page}`;
    }
    // genre.id === undefined ? console.log('Undefined') : apiUrl = `${baseUrl}discover/movie?${apiKey}&with_genres=${genre.id}` setGenres(genre.id)

    useEffect(() => {
        getData()
        getGenres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genre, page])
    const increasePag = () => {
        setPage(page + 1)
        getData()
        window.scrollTo(0, 0)
    }
    const getGenres = () => setGenre(paramsIds.name)

    const decreasePag = () => {
        setPage(page - 1)
        getData()
        window.scrollTo(0, 0)

    }

    const getData = async () => {
        const data = await fetch(apiUrl)
        const movies = await data.json()
        setFilms(movies)
    }
    console.log(apiUrl)
    return (
        <>
            <ThemeContext.Provider value={[films, setFilms]}>
                <Navbar />
                <div className='titulo-genero pt-10'>
                    {genre !== [] ? <h2 className='text-4xl font-bold text-white'>{genre}</h2> : <h2 className='text-5xl font-bold'>{apiUrl}</h2>}
                </div>
                <CardComponent Films={films} />
                <Button variant="contained" sx={{ mx: 2 }} disabled={page === 1 ? true : false} onClick={decreasePag}>Prev</Button>
                <Button variant="contained" sx={{ mx: 2 }} onClick={increasePag}>Next</Button>
            </ThemeContext.Provider>
        </>
    )
}

export default Home