"use client";

import type { FormEventHandler } from 'react'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const CredentialsAuthForm = () => {

    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false, // перенаправление на автозгенерированную форму аунтификации в случае ошибки
        })

        if (response && !response.error) {
            router.push('/pages/profilePage')
        } else {
            console.log(response); // в консоль вывожу ошибку, потом дописать 
            
        }
    }

  return (
    <form  className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <div className='px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center'>
            <input className='px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white' placeholder='Email...' type="email" name='email' required/>
            <input className='px-2 py-2 mx-2 my-1 text-gray-800 bg-blue-500 hover:bg-blue-600 rounded-lg duration-150 outline-none placeholder-white' placeholder='Password...' type="password" name='password' required/>
        </div>
        <div className='buttonBlock'>
            <button className='py-2 px-2 mx-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg duration-150'>Sign In</button>
        </div>
    </form>
  )
}

export default CredentialsAuthForm