
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'


function App() {

  let [watchList, setWatchList] = useState([])

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList);
  }


  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    })
    setWatchList(filteredWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<>

            <Banner /> <Movies watchList={watchList} handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList} />


          </>}
          />
          <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App


//  https://api.themoviedb.org/3/movie/popular?api_key=1c0799b502de7ee33a93b7d28c600404&language=en-US&page=1