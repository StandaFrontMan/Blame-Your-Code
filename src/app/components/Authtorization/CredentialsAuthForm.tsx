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
    <form onSubmit={handleSubmit}>
        <div className='inputBlock'>
            <input placeholder='Email...' type="email" name='email' required/>
            <input placeholder='Password...' type="password" name='password' required/>
        </div>
        <div className='buttonBlock'>
            <button className='signInButton'>Sign In</button>
        </div>
    </form>
  )
}

export default CredentialsAuthForm