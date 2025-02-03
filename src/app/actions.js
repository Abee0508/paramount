// import 'server-only'
'use server'
// import { cookies } from 'next/headers'
import { createSession, deleteSession } from "@/app/lib/cookie"
import axiosInstance from "@/utils/axios";
import axios from 'axios';
import { redirect } from 'next/navigation'
import { sendGetRequest } from "./auth/api/helper";

export async function logout(prevState){
    deleteSession('session')
    deleteSession('token')
    redirect('/login')
}

export async function login(prevState, formData){
    // try{
    var password = formData.get('password'), email = formData.get('email');
    const res = await axios.post(process.env.NEXT_PUBLIC_API_URL+'/api/login',{
        email: email,
        password: password,
    }).catch(e=>{
        return e.response.data
    })
    if(res.errors){
        return { errors: [res.errors] }
    }else{
        await createSession(res.data.user.id)
        await createSession(res.data.token, "token")
        redirect('/')
    }
    // }catch(ex){
    //     console.log(ex)
    //     return { errors: ["Login Failed"] }
    // }
    // await createSession(loginResponse.data.user.id)
    // await createSession(loginResponse.data.user.token, 'token')
    // redirect('/')
}

export async function me(){
    const data = await sendGetRequest('me')
    return data.data;
}