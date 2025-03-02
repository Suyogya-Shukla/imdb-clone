import React from 'react';

function MovieCard({ movieObj, watchList = [], handleAddtoWatchList, handleRemoveFromWatchList, poster_path, name }) {


    const isInWatchList = watchList.some(movie => movie.id === movieObj.id);

    return (
        <>
            <div

                className="h-[40vh] w-[200px] bg-gray-200 rounded-xl m-5 bg-center bg-cover cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-center"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
            >
                <div
                    onClick={() => isInWatchList ? handleRemoveFromWatchList(movieObj) : handleAddtoWatchList(movieObj)}
                    className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 cursor-pointer"
                >
                    {isInWatchList ? "❌" : "😍"}
                </div>

                <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
                    {name}
                </div>
            </div>
        </>
    );
}

export default MovieCard;
