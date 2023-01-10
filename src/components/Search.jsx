import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ThemeContext } from './Home'

const Search = () => {
    const [film, setFilms] = useContext(ThemeContext);
    const [query, setQuery] = useState([])
    const endPoint = `https://api.themoviedb.org/3/search/multi?api_key=dbe3dee6c438945702b17bc1d73cf530&language=en-US&query=${query}&page=1&include_adult=false`

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch(endPoint)
            let data = await res.json()
            setFilms(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-64">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-3 h-3 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" value={query} onChange={(e) => setQuery(e.target.value)} className="block w-full py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies..." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1 ">Search</button>
                </div>
            </form>

        </div >
    )
}

export default Search