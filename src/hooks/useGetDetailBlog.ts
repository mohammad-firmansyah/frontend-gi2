import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { globalState } from "../state/global/global.atom";

export const useGetDetailBlog = (id: string) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [global, setGlobal] = useRecoilState(globalState);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blogs/${id}`,{
        headers:{
          "Authorization":`Bearer ${global.token}`
        }
      });
      
      const {data} = await response.json();
      setBlog(data[0]);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//     fetchBlog();
//   }, [id]);

  return { blog, loading, error, refetch: () => fetchBlog() };
}