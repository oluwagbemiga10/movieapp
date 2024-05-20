import React from 'react'
import Menuitem from './menuitem'
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from 'next/link'
import Darkmode from './darkmode'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <Menuitem title='Home' address='/'  />
            <Menuitem title='About' address='/about'  />
        </div>
        <div className='flex gap-4 items-center'>
          <Darkmode />
          <Link href={"/"} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
        
    </div>
  )
}

export default Navbar
