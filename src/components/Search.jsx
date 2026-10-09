import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ThemeContext } from './Home'

const Search = () => {
    const [film, setFilms] = useContext(ThemeContext);
    const [query, setQuery] = useState([])
    const endPoint = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

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
                        <svg aria-hidden="true" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" value={query} onChange={(e) => setQuery(e.target.value)} className="block w-full py-2.5 pl-10 text-sm text-slate-100 placeholder-slate-400 border border-slate-700 rounded-lg bg-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400" placeholder="Search Movies..." required />
                    <button type="submit" className="absolute right-2 bottom-2 bg-amber-400 text-slate-900 hover:bg-amber-300 focus:ring-2 focus:outline-none focus:ring-amber-200 font-semibold rounded-md text-xs px-3 py-1 transition-colors">Search</button>
                </div>
            </form>

        </div >
    )
}

export default Search