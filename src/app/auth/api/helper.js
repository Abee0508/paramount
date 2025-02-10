import initialize from "@/utils/baxios";
import toast from "react-hot-toast";

export async function sendRequest(route, formData, successResponseKey='') {
    const axios = await initialize()
    const res = await axios.post(route, formData)
    .then(e=>{
        if(successResponseKey!=''){
            return {status: true, data: e.data[successResponseKey]}
        }else{
            return {status: true, data: e.data}
        }
    }).catch(e=>{
        return {status: false, errors: e.response.data}
    })
    return res
}

export async function sendGetRequest(route, queryString, successResponseKey='') {
    const axios = await initialize()
    const res = await axios.get(route, {params:queryString})
    .then(e=>{
        if(successResponseKey!=''){
            return {status: true, data: e.data[successResponseKey]}
        }else{
            return {status: true, data: e.data}
        }
    }).catch(e=>{
        return {status: false, errors: e.response.data}
    })
    return res;
}

export async function sendDeleteRequest(route, successResponseKey='') {
    const axios = await initialize()
    const res = await axios.delete(route)
    .then(e=>{
        if(successResponseKey!=''){
            return {status: true, data: e.data[successResponseKey]}
        }else{
            return {status: true, data: e.data}
        }
    }).catch(e=>{
        return {status: false, errors: e.response.data}
    })
    return res;
    
}

  // Helper function to dynamically fix storage paths
export function fixStoragePath(imageUrl) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/storage/`; 

    if (imageUrl.startsWith("http")) {
      const urlParts = new URL(imageUrl);
      if (!urlParts.pathname.includes("/storage/")) {
        return imageUrl.replace(urlParts.origin + "/", baseUrl);
      }
      return imageUrl; 
    }

    if (!imageUrl.startsWith("/storage/")) {
      return `${baseUrl}${imageUrl.replace(/^\/+/, "")}`; // Trim any leading slashes
    }

    return imageUrl; // Already starts with /storage/, so return as is
  }


  
  