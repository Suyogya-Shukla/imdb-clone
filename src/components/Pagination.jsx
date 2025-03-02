import React from 'react'

function Pagination(props) {
    return (
        <div className='bg-gray-400 flex mt-8 justify-center p-4'>
            <div onClick={props.handlePrevious} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
            <div className='font-bold'>{props.pageNo}</div>
            <div onClick={props.handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination
