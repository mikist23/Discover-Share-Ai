"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import  {getProviders, signIn, signOut, useSession}
 from  'next-auth/react'
function Nav() {
  const signout = ()=>{
    
  }
  const [count ,setCount] = useState(0)
  const isUserLogedIn = true
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className=' flex gap-2'>
        
        <image  src='/assets/images/logo.svg' className=' object-contain'
        alt="Logo"
        width={40}
        height={30}/>
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/**Mobile Navigation */}
         <div className='sm:flex hidden'>
            {isUserLogedIn ? (
              <div className='flex gap-3 md:gap-5'>
                 <Link href="/create-prompt" className='black_btn'>
                 Create Post
                 </Link>
                 <button onClick={signout} className='outline_btn'>
                  Sign Out
                 </button>

                 <Link href="/profile" className=''>
                  <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  />
                 
                 </Link>
              </div>
            ) : (
              <>
              </>
            )}
         </div>
    </nav>
  )
}

export default Nav