import React from 'react'

function Banner() {
    return (
        <div style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2hLRTz3TvvnBPOieL95RoB_ZaJxyK9ifFQ&s')` }} className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end '>
            <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Avengers Endgame</div>
        </div>
    )
}

export default Banner
