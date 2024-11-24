import { useState } from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../state/global/global.atom";
import { upload } from "../common/upload";
import { getRandomString } from "../common/utils";

export const useInsertBlog = ()=>{
    const [token,setToken] = useState(null)
    const [global,setGlobal] = useRecoilState(globalState);
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    
    const insertBlog = async (body,callback) => {
        
        try{
                setLoading(true)

                const url = await upload(getRandomString(10)+".png",body.hero_image)
                
                body.hero_image = url

                const response =await fetch(`${import.meta.env.VITE_BASE_URL}/api/blogs`,{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+global.token
                    },
                    body: JSON.stringify(body),
                })
                
                if(!response.ok){
                    const {message} = await response.json()
                    throw new Error(message)
                }
        
                const {data} = await response.json()
        
                setLoading(false)

                callback()
        }catch(e){
            setLoading(false)
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, error, insertBlog };
}