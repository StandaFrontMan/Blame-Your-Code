import type { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { authorizeFunction } from '../modules/Auth/domain/authorizeFunction';

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,  
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
                return await authorizeFunction(credentials)
            }
        })
    ],
    pages: {
         signIn: '/pages/authPage'
    }
}