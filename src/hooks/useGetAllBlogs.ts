import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../state/global/global.atom";

export const useGetAllBlogs = ()=>{
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [global, setGlobal] = useRecoilState(globalState);

    const fetchBlogs = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL+'/api/blogs',{
                headers:{
                    "Authorization":`Bearer ${global.token}`
                }
            });
            const {data} = await response.json();
            setBlogs(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    

    return { blogs, loading, error,refetch:()=>fetchBlogs() };
}