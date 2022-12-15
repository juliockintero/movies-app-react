import React, { useEffect, useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'


function App() {

  const [films, setFilms] = useState([])

  const apiKey = 'api_key=dbe3dee6c438945702b17bc1d73cf530'
  const baseUrl = 'https://api.themoviedb.org/3/'
  const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData = async () => {
    const data = await fetch(apiUrl)
    const movies = await data.json()
    setFilms(movies)
  }
  console.log(films)
  return (
    <div className="App bg-gradient-to-r from-slate-800 to-indigo-900">
      <CardComponent Films={films} />
    </div>
  )
}

export default App

