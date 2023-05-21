import React from 'react'

export default function Categories() {
    return (
        <div className='mb-20 mt-10'>
            Categories
            <section className='container mx-auto mt-10 px-96  grid grid-rows-2 grid-flow-col gap-10'>
                <div className='w-[80px] h-[80px] rounded-[50%] bg-cyan-300 flex items-center justify-center mx-auto'>1</div>
                <div className='w-[80px] h-[80px] rounded-[50%] bg-cyan-300 flex items-center justify-center mx-auto'>2</div>
                <div className='w-[80px] h-[80px] rounded-[50%] bg-cyan-300 flex items-center justify-center mx-auto'>3</div>
                <div className='w-[80px] h-[80px] rounded-[50%] bg-cyan-300 flex items-center justify-center mx-auto'>4</div>
            </section>
        </div>
    )
}
