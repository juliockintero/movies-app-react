import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const urlQuery = searchParams.get('q') || ''
    const [query, setQuery] = useState(urlQuery)
    const onSearchPage = location.pathname.startsWith('/search')

    // Mantiene el input sincronizado si la URL cambia (p. ej. al elegir un género)
    useEffect(() => {
        setQuery(urlQuery)
    }, [urlQuery])

    // Filtra al tipear: espera 400 ms sin escribir antes de buscar
    useEffect(() => {
        const text = query.trim()
        if (text === urlQuery) return

        const timer = setTimeout(() => {
            if (text) {
                navigate(`/search?q=${encodeURIComponent(text)}`, { replace: onSearchPage })
            } else if (onSearchPage) {
                navigate('/')
            }
        }, 400)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = query.trim()
        if (text) navigate(`/search?q=${encodeURIComponent(text)}`, { replace: onSearchPage })
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-64">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" value={query} onChange={(e) => setQuery(e.target.value)} className="block w-full py-2.5 pl-10 text-sm text-slate-100 placeholder-slate-400 border border-slate-700 rounded-lg bg-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400" placeholder="Search Movies..." autoComplete="off" />
                    <button type="submit" className="absolute right-2 bottom-2 bg-amber-400 text-slate-900 hover:bg-amber-300 focus:ring-2 focus:outline-none focus:ring-amber-200 font-semibold rounded-md text-xs px-3 py-1 transition-colors">Search</button>
                </div>
            </form>

        </div >
    )
}

export default Search
