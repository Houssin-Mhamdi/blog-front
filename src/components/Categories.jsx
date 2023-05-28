import React from 'react'
import { categories } from '../data/CategoriesData.js'
export default function Categories() {
    return (
        <div className='mb-20 mt-10'>
            <h3 className='ml-16 text-lg'>Categories</h3>
            <section className='container mx-auto mt-10 px-96  grid grid-rows-2 grid-flow-col gap-10'>
                {categories?.map((category) => {
                    return (
                        <div key={category?.id}>
                            <div className='relative' >
                                <p className='absolute left-[15rem] top-5 text-lg'>{category?.title}</p>
                                <div className='w-[80px] h-[80px] rounded-[50%] bg-[#00FFE0] flex items-center justify-center mx-auto'>
                                    <img src={category?.image} alt={category.title} className='w-14' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
