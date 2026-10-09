//Packages
import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../logo.svg'

//Components
import DropdownGenres from './DropdownGenres'
import Search from './Search'

const Navbar = () => {
    return (
        <>

            <nav className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur border-b border-white/10 px-2 sm:px-4 py-3">
                <div className="container text-slate-200 flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9" alt="React Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Movies <span className="text-amber-400">React-App</span></span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-slate-300 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex items-center flex-col p-4 mt-4 border border-white/10 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:p-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 rounded md:p-0 text-slate-200 hover:text-amber-400 transition-colors" aria-current="page">Home</a>
                            </li>
                            <li>
                                <DropdownGenres />
                            </li>
                            <li>
                                <Search />
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-slate-200 hover:text-amber-400 transition-colors">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar