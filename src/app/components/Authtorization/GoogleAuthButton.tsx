"use client";

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const GoogleAuthButton = () => {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/pages/profilePage';

  return (
    <button className='py-2 px-2 mx-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg duration-150' onClick={() => signIn('google', {callbackUrl})}>
        Sign In with Google
    </button>
  )
}

export default GoogleAuthButton