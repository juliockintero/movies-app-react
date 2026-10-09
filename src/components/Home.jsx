//Packages
import React, { useEffect, useState, createContext } from 'react'
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
    const genre = paramsIds.name

    const apiKey = 'api_key=' + process.env.REACT_APP_TMDB_API_KEY
    const baseUrl = 'https://api.themoviedb.org/3/'
    let apiUrl

    if (paramsIds.id === undefined) {
        apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey + '&page=' + page
    } else {
        apiUrl = `${baseUrl}discover/movie?${apiKey}&with_genres=${paramsIds.id}&page=${page}`;
    }

    // Al cambiar de género se vuelve a la primera página
    useEffect(() => {
        setPage(1)
    }, [paramsIds.id])

    // Se recarga cada vez que cambia la URL (género o página)
    useEffect(() => {
        let ignore = false
        const getData = async () => {
            const data = await fetch(apiUrl)
            const movies = await data.json()
            // Descarta respuestas de una petición anterior que llegue tarde
            if (!ignore) setFilms(movies)
        }
        getData()
        return () => { ignore = true }
    }, [apiUrl])

    const increasePag = () => {
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    const decreasePag = () => {
        setPage(page - 1)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <ThemeContext.Provider value={[films, setFilms]}>
                <Navbar />
                <div className='titulo-genero pt-10'>
                    {genre && <h2 className='text-4xl font-bold text-white'>{genre}</h2>}
                </div>
                <CardComponent Films={films} />
                <Button variant="contained" sx={{ mx: 2 }} disabled={page === 1 ? true : false} onClick={decreasePag}>Prev</Button>
                <Button variant="contained" sx={{ mx: 2 }} onClick={increasePag}>Next</Button>
            </ThemeContext.Provider>
        </>
    )
}

export default Home