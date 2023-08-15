"use client";

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const GoogleAuthButton = () => {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/pages/profilePage';

  return (
    <button onClick={() => signIn('google', {callbackUrl})}>
        Sign In with Google
    </button>
  )
}

export default GoogleAuthButton