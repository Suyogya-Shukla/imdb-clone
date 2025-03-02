import React from 'react'

function Banner() {
    return (
        <div style={{ backgroundImage: `url('https://cdn.freebiesupply.com/logos/thumbs/2x/imdb-logo.png')` }} className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end '>
            <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>IMDb</div>
        </div>
    )
}

export default Banner
