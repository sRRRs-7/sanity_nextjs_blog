import React from 'react';
import Link from 'next/link';


export const Header = () => {
  return (
    <header className='flex justify-between px-10 py-2 bg-gray-300'>
        <div className='flex items-center space-x-5'>
            <Link href="/">
                <img 
                className='w-28 object-contain cursor-pointer'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'
                    alt='kyoto' />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
                <h3 className='cursor-pointer hover:scale-125 font-serif'>About</h3>
                <h3 className='cursor-pointer hover:scale-125 font-serif'>Contact</h3>
                <h3 className='cursor-pointer text-blue border border-blue-600 text-blue-600 px-3 py-1 rounded-full hover:scale-125 font-serif'>
                    Follow
                </h3>
            </div>
        </div>

        <div className='flex items-center space-x-5'>
            <h3 className='cursor-pointer hover:scale-125 font-serif'>Sign In</h3>
            <h3 className='cursor-pointer border px-4 py-1 rounded-full border-green-600 text-green-600 hover:scale-125 font-serif'>
                Get Started
            </h3>
        </div>
    </header>
  )
}
