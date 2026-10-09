//Packages
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components


const DropdownGenres = () => {

    const [isOpen, setOpen] = useState(false)

    const handleToggle = () => setOpen(!isOpen);

    // Cierra solo si el foco sale del dropdown (no al pasar del botón a un género)
    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
    }


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
        <div className='relative' onBlur={handleBlur}>
            <button id="dropdownDividerButton" onClick={handleToggle} aria-expanded={isOpen} className={`flex items-center transition-colors hover:text-amber-400 ${isOpen ? "text-amber-400" : "text-slate-200"}`} type="button">Genres
                <svg className={`ml-2 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div id="dropdownDivider" className={`absolute top-8 z-30 w-64 p-2 bg-slate-900 border border-white/10 rounded-lg shadow-xl shadow-black/40 transition duration-200 ease-out ${isOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"}`}>
                <ul className="grid grid-cols-2 gap-1 text-sm text-slate-300 text-left">
                    {
                        genres.map(item => (
                            <li key={item.id} >
                                <Link to={`/genres/${item.name}/${item.id}`} onClick={() => setOpen(false)} className="block rounded-md py-2 px-3 transition-colors hover:bg-white/10 hover:text-amber-400 focus:bg-white/10 focus:text-amber-400 focus:outline-none">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default DropdownGenres