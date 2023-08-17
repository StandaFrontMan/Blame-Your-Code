import Link from 'next/link'
import React from 'react'

const SignInButton = () => {
  return (
    <Link
      className='inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150"'
      href='/pages/authPage'
    >Sign In</Link>
  )
}

export default SignInButton