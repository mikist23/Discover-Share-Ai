"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import  {getProviders, signIn, signOut, useSession}
 from  'next-auth/react'
function Nav() {
  
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className=' flex gap-2'>
        
        <image  src='/assets/images/logo.svg' className=' object-contain'
        alt="Logo"
        width={40}
        height={30}/>
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/**Mobile */}
      <div></div>
    </nav>
  )
}

export default Nav