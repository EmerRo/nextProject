import React from 'react'
import './Nabar.css'
import Link from 'next/link'
const Navbar = () => {
  return (
   
         <nav className='bg-gray-700 flex py-4 text-center justify-between'>
          <Link href={'/'}>
            <h1 className='text-3xl font-bold'>Nexjs curso</h1>
          </Link>
          <ul className='flex '>
            <li className='px-4'>
              <Link href="/">Home</Link>
            </li>
            <li className='px-4'>
              <Link href="/about">About</Link>
            </li>
            <li className='px-4'>
              <Link href="/tienda">tienda</Link>
            </li>
            <li className='px-4'>
              <Link href="/post">post</Link>
            </li>
          </ul>
        </nav>
   
  )
}

export default Navbar