import Image from 'next/image'
import React from 'react'
import MenuBar from './MenuBar'

const Navbar = () => {
  return (
    <nav className='border border-red-400 w-full fixed md:px-6  px-5 lg:px-8 xl:px-[8%] md:py-4 py-2
    flex  items-center justify-between '>
        {/* icon Logo */}
        <a className='border border-amber-400 w-28'>Logo</a>

            <ul className='hidden md:flex space-x-10 lg:space-x-15 bg-white px-12 py-4 rounded-[50px] drop-shadow-lg'>
                <li><a href='#home' className=''>Home</a></li>
                <li><a href='#about' className=''>About</a></li>
                <li><a href='#portfolio' className=''>Portfolio</a></li>
                <li><a href='#contact' className=''>Contact</a></li>
            </ul>
       
        <div className=' flex items-center '>
            <button>
                <Image src = "/assets/moon.png" alt='' width={20} height={20}/>
            </button>
            {/* icon contact */}
            <a href='#contact' className='hidden lg:flex   items-center gap-2 
            px-10 sm:px-2 sm:py-1 py-2.5 border border-gray-500 rounded-full ml-4'>Contact
            <Image src="/assets/pointer.png" alt='' width={8} height={8} className='' /></a>
            <MenuBar />
        </div>
    </nav>
  )
}
export default Navbar