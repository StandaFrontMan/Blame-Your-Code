import { useRouter } from 'next/navigation';
import React, { FormEventHandler } from 'react'

const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {

    // const router = useRouter()

    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    const data = {
        username: formData.get('name'),
        login: formData.get('email'),
        password: formData.get('password'),
        photo: 1
    };

    try {
        const response = await fetch('https://blame-your-code-production.up.railway.app/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        // if(response && response.ok) {
        //     router.push('/pages/profilePage')
        // }

    } catch (error) {
        alert('Error' + error); // потом дописать 
    }
}

export default handleSubmit