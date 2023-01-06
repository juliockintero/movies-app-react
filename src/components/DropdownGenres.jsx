//Packages
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import { ThemeContext } from './Home'

const DropdownGenres = () => {

    const [isOpen, setOpen] = useState(false)
    const { genre, setGenre } = useContext(ThemeContext)

    const handleFocus = () => setOpen(!isOpen);


    const handleBlur = () => setOpen(false)


    const genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]

    return (
        <div className='relative'>
            <button id="dropdownDividerButton" onFocus={handleFocus} onBlur={handleBlur} className="flex items-center" type="button">Genres
                <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div id="dropdownDivider" className={`  absolute top-6 z-10 w-56 bg-white rounded  transition duration-300 ease-in-out shadow  ${isOpen ? "opacity-100 " : "opacity-0"}`}>
                <ul className="grid grid-cols-2 text-sm text-gray-700 dark:text-gray-200">
                    {
                        genres.map(item => (
                            <li key={item.id} >
                                <Link to={`/genres/${item.id}`} onClick={() => setGenre(item.name)} key={item.id} className="block  rounded py-2 px-4 hover:bg-gradient-to-r from-slate-800 to-indigo-900  hover:text-white">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default DropdownGenres