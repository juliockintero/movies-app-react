//Packages
import React, { useEffect, useState, } from "react";
import { useParams } from 'react-router-dom';

//Components
import Navbar from "./Navbar";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const FeatureFilm = ({ film }) => {

    const generos = film.genres
    let votosInt = parseFloat(film.vote_average)
    let budgedNum = parseFloat(film.budget)
    const budget = budgedNum.toLocaleString()
    let revenueNum = parseFloat(film.revenue)
    const revenue = revenueNum.toLocaleString()
    let dateString = film.release_date
    let date = new Date(Date.parse(dateString))
    const year = date.getFullYear()

    votosInt = (votosInt * 1000 / 100)

    console.log(votosInt)

    return (
        <div className="p-5 ml-4 text-white	text-left">

            <div className="headerFilm flex py-2">
                <h1 className=" text-5xl font-bold w-fit ">{film.original_title} </h1>
                <span className="text-3xl pt-3 px-3">({year})</span>

            </div>
            <div className="contentFilm">
                <div className="genres  pb-2 ">
                    {
                        Array.isArray(generos) ?
                            generos.map(item => (<span className="my-2 mx-1" key={item.id}>{item.name + ","}</span>)) : null
                    }
                    <span className="pl-3 before:content-['\2022']">{film.runtime}m</span>


                </div>
                <div className=" money flex w-fit  py-2">
                    <p className="text-xl font-bold ">Budget</p>
                    <span className="text-xl text-emerald-500 px-4">${budget}</span>
                    <p className="text-xl font-bold ">Reveneu</p>
                    <span className="text-xl text-emerald-500 px-4">${revenue}</span>
                </div>
                <h2 className="text-xl font-bold py-2">Overview</h2>
                <p>
                    {film.overview}
                    {console.log(typeof film.vote_average)}
                </p>

                <svg width="100" height="100">
                    <circle className="-rotate-90 origin-center" cx="50" cy="50" r="25" stroke="green" strokeWidth="5" fill="none" strokeDasharray="565.48" strokeDashoffset={565.48 - (70 / 100 * 565.48)} >{film.vote_average}</circle>
                </svg>
            </div>
        </div>
    )
}

const MediaSection = ({ id }) => {

    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)


    const baseVideo = 'https://www.youtube-nocookie.com/embed/'

    const getMedia = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id.id + '/videos?api_key=dbe3dee6c438945702b17bc1d73cf530')
        const media = await data.json()
        setVideos(media.results)
        setLoading(false)

    }
    useEffect(() => {

        getMedia()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="video pt-10">
            <h2 className="text-3xl font-bold text-white pb-10">Media section</h2>

            {
                loading ?
                    <div disabled type="button" className="py-2.5 px-5 mr-2 m text-white inline-flex items-center">
                        <svg role="status" className="inline mr-2 w-20  animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg>
                        Loading...
                    </div>
                    :
                    <div className="flex flex-wrap justify-center">
                        {
                            videos.map(video =>
                                <div key={video.key} className="w-96 h-64 m-2 p-2"><iframe className="w-full h-full" src={baseVideo + video.key} title={video.name} key={video.key}></iframe></div>
                            )
                        }
                    </div>
            }

        </div>
    )
}

const FilmSection = () => {
    let params = useParams()
    const apiKey = 'api_key=dbe3dee6c438945702b17bc1d73cf530'
    const baseUrl = 'https://api.themoviedb.org/3/'
    const apiUrl = baseUrl + '/movie/' + params.id + '?&' + apiKey
    const cardImage = 'https://image.tmdb.org/t/p/w400'

    const [film, setFilm] = useState([])

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = async () => {
        const data = await fetch(apiUrl)
        const movies = await data.json()
        setFilm(movies)
    }


    const backgroundImage = "https://image.tmdb.org/t/p/original/" + film.backdrop_path


    return (
        <>
            <Navbar />
            <div className="film-section flex p-10" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.6), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <Card sx={{ minWidth: 345, maxHeight: 660 }} className='my-2 relative'>
                    <CardMedia
                        component="img"
                        alt="movie-img"
                        height="150"
                        image={cardImage + film.poster_path}
                    />
                </Card>
                <FeatureFilm film={film} />
            </div>
            <MediaSection id={params} />
        </>
    )

}

export default FilmSection