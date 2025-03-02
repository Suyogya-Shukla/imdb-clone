import React from 'react'
import WatchList from './WatchList'

function MovieCard(props) {

    // function doesContain(movieObj,) {
    //     for (let i = 0; i < props.watchList.length; i++) {
    //         if (props.watchList[i].id == movieObj.id) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    function doesContain(movieObj) {
        if (!props.watchList || props.watchList.length === 0) {
            return false;  // ✅ Prevents crash when watchList is undefined
        }

        for (let i = 0; i < props.watchList.length; i++) {
            if (props.watchList[i].id === movieObj.id) {
                return true;
            }
        }
        return false;
    }


    return (
        <div className='h-[40vh] w-[200px] bg-gray-200 rounded-lg m-5 bg-center bg-cover rounded-xl hover: cursor-pointer hover:scale-110 duration-300  justify-between items-end' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})` }}>

            {doesContain(props.movieObj) ? (
                <div onClick={() => (props.handleRemoveFromWatchList(props.movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                    &#10060;
                </div>
            ) : (
                <div onClick={() => (props.handleAddtoWatchList(props.movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                    &#128525;
                </div>
            )}

            {/* <div onClick={() => (props.handleAddtoWatchList(props.movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                &#128525;
            </div> */}

            <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60 absolute bottom-0 left-auto right-auto'>
                {props.name}
            </div>
        </div>
    )
}

export default MovieCard


