//Packages
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

//Components
import FilmSection from './components/FilmSection';
import Home from './components/Home';



function App() {

  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-r from-slate-800 to-indigo-900 pb-4 h-full">
        <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route path='/movie/:id' element={<FilmSection />}></Route>
          <Route path='/genres/:name/:id' element={<Home />}></Route>
          <Route path='/search/' element={<Home />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

