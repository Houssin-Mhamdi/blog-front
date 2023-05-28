import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import ButtonAcheteretvendre from './ButtonAcheteretvendre';

export default function NavBar() {
  const [close, setClose] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  console.log(dropdown)
  return (
    <nav className='relative'>
      <div className='h-[100px] bg-white drop-shadow-xl text-center pt-8 pb-8 flex items-center justify-between px-5'>

        <RxHamburgerMenu onClick={() => setClose((prev) => !prev)} size={30} className='cursor-pointer' />
        <p className='text-lg select-none'> <span className='select-none bg-[#00FFE0] text-black mr-2'>Meka</span>News</p>

        <div>

        </div>
      </div>

      <div className={`bg-white shadow-2xl	w-[25rem] h-[115rem] absolute ${close ? "-left-0" : "-left-[25rem] "} top-0 z-40`}>
        <AiOutlineClose onClick={() => setClose((prev) => !prev)} size={30} className='cursor-pointer ml-5 mt-10' />



        <div className='mt-16 ml-10'>

          <ul>
            <li className='font-bold text-lg mb-2'>Acceuil</li>
            <li onClick={() => setDropdown((prev) => !prev)} className='font-bold text-lg  mb-2'>Categories</li>
            <ul className={`ml-5 ${dropdown ? "mb-4" : "mb-1"}`}>
              <div className={`${dropdown ? "block" : "hidden"}`}>
                <li><a href="/">Voiture</a></li>
                <li><a href="/">Moto</a></li>
                <li><a href="/">Category</a></li>
                <li><a href="/">Comparaison</a></li>

              </div>
            </ul>
            <li className='font-bold text-lg  mb-2'>About us</li>
            <li className='font-bold text-lg  mb-2'>Contact</li>
          </ul>
        </div>
        <div className='mt-20'>
          <ButtonAcheteretvendre />
        </div>
      </div>

    </nav>
  )
}
