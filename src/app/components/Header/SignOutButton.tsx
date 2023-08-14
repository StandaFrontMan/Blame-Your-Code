import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button
        className='userButton'
        onClick={() => signOut({callbackUrl: '/'})}
    >
        Sign Out
    </button>
  )
}

export default SignOutButton