import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'
import WatchList from './WatchList'

function Movies(props) {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)

    const handlePrevious = () => {
        if (pageNo === 1) {
            setPageNo(pageNo)
        }
        else {
            setPageNo(pageNo - 1)
        }

    }

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1c0799b502de7ee33a93b7d28c600404&language=en-US&page=${pageNo}`).then(function (res) {
            setMovies(res.data.results);
        })
    }, [pageNo])

    return (
        <div className='p-5'>
            <div className='text-center text-2xl font-bold'>Trending Movies</div>
            <div className='flex flex-row flex-wrap justify-around'>

                {movies.map((movieObj) => {
                    return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={props.handleAddtoWatchList} handleRemoveFromWatchList={props.handleRemoveFromWatchList} movieObj={movieObj} WatchList={props.WatchList} />
                })}
            </div>
            <Pagination pageNo={pageNo} handleNext={handleNext} handlePrevious={handlePrevious} />
        </div>
    )
}

export default Movies
