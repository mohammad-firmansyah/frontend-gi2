import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../state/global/global.atom";
import { userAtom } from "../state/user/user.atom";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [token,setToken] = useState(null)
    const [global,setGlobal] = useRecoilState(globalState);
    const [user,setUser] = useRecoilState(userAtom);
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (global.token) {
          navigate("/admin/dashboard");
        } else {
          console.log("Login failed.");
        }
      }, [global.token]);
      
    const loginFetch = async (username:string,password:string) => {


        try{
            setLoading(true)

            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/login`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email:username,password:password}),
            })


            if(!response.ok){
                const {message} = await response.json()
                throw new Error(message)
            }

            const {user,token} = await response.json()
            setGlobal({
                ...global,
                isAuthenticated:true,
                token:token
            })

            setUser({
                ...user,
                user
            })

            // console.log("token",user)
            localStorage.setItem('token',token)
            
            setLoading(false)


        }catch(err){
            setGlobal({
                ...global,
                isAuthenticated:false
            })  
            setError(err.message)

        }finally{
            setLoading(false)
        }
    }

    
    return {loading, error, loginFetch };

}