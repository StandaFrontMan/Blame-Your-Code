import React from 'react'
import SubmitRegistrationFormButton from './SubmitRegistrationFormButton'

const RegistrationForm = () => {
  return (
    <form className='flex flex-col justify-center items-center' action="">
        <div className='px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center'>
            <input
                className='px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white'
                placeholder='User Name...'
                type="name"
                name='name'
                required
            />
            <input
                className='px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white'
                placeholder='Email...'
                type="email"
                name='email'
                required
            />
            <input
                className='px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white'
                placeholder='Password...'
                type="password"
                name='password'
                required
            />
        </div>
        <div>
            <SubmitRegistrationFormButton />
        </div>
    </form>
  )
}

export default RegistrationForm