import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button
        className='inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150'
        onClick={() => signOut({callbackUrl: '/'})}
    >
        Sign Out
    </button>
  )
}

export default SignOutButton