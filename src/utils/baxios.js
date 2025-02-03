'use server'
import axiosInstance from "./axios";
import { cookies } from "next/headers";

export default async function initialize(){
    const token = await cookies().get('token').value
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
    return axiosInstance;
}