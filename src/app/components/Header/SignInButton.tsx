import Link from 'next/link'
import React from 'react'

const SignInButton = () => {
  return (
    <Link href='/api/auth/signin'>Sign In</Link>
  )
}

export default SignInButton