'use server'
import { cookies } from 'next/headers'

export async function createSession(sessionData, key = 'session') {
    const encryptedSessionData = (sessionData) // Encrypt your session data
    cookies().set(key, encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    })
    // Redirect or handle the response after setting the cookie
}
export async function deleteSession(key){
    cookies().delete(key);
}