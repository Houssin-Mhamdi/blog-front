import React from 'react'

export default function Search() {
    return (
        <div className='flex flex-col items-center items-center'>
            <input type="text" placeholder='eg Top 10 cars relieable in tunisia' className='rounded-md w-[500px]  mt-10 h-[40px] pl-3 border-2 border-black' />
            <button className='bg-[#00FFE0] px-10 py-2 w-100 mt-4 rounded-lg'>Recherche</button>
        </div>
    )
}
