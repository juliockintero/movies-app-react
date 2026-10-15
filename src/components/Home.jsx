//Packages
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

//Compononents
import CardComponent from './CardComponent'
import Navbar from './Navbar'
import { Button } from '@mui/material'


const Home = () => {

    let paramsIds = useParams()
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)
    const genre = paramsIds.name

    const apiKey = 'api_key=' + process.env.REACT_APP_TMDB_API_KEY
    const baseUrl = 'https://api.themoviedb.org/3/'
    let apiUrl

    if (query) {
        apiUrl = `${baseUrl}search/movie?${apiKey}&query=${encodeURIComponent(query)}&include_adult=false&page=${page}`
    } else if (paramsIds.id === undefined) {
        apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey + '&page=' + page
    } else {
        apiUrl = `${baseUrl}discover/movie?${apiKey}&with_genres=${paramsIds.id}&page=${page}`;
    }

    // Al cambiar de género o de búsqueda se vuelve a la primera página
    useEffect(() => {
        setPage(1)
    }, [paramsIds.id, query])

    // Se recarga cada vez que cambia la URL (género, búsqueda o página)
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

    const noResults = query && films.results && films.results.length === 0

    return (
        <>
            <Navbar />
            <div className='titulo-genero pt-8 sm:pt-10 px-4'>
                {query ?
                    <h2 className='text-2xl sm:text-4xl font-bold text-white break-words'>Results for "{query}"</h2>
                    : genre && <h2 className='text-3xl sm:text-4xl font-bold text-white'>{genre}</h2>}
            </div>
            {noResults ?
                <p className='py-16 px-4 text-lg text-slate-300'>No movies found for "{query}".</p>
                : <CardComponent Films={films} />}
            <Button variant="contained" sx={{ mx: 2 }} disabled={page === 1} onClick={decreasePag}>Prev</Button>
            <Button variant="contained" sx={{ mx: 2 }} disabled={!films.total_pages || page >= films.total_pages} onClick={increasePag}>Next</Button>
        </>
    )
}

export default Home