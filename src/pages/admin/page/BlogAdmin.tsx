import {Table } from "@mui/joy"
import {AddBox } from "@mui/icons-material"
import * as React from 'react';
import Button from '@mui/joy/Button';
import { useRecoilState } from "recoil";
import { adminAtom } from "../../../state/modal/admin.atom";
import { useGetAllBlogs } from "../../../hooks/useGetAllBlogs";

export const BlogAdmin : React.FC = () => {
    const [adminState,setAdminAtom] = useRecoilState(adminAtom);
    const {blogs,loading,error,refetch} = useGetAllBlogs();

    React.useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            <h2>Blog Admin</h2>

            <Button color="success" onClick={()=>{
                setAdminAtom({
                    ...adminState,
                    isModalAddBlogShowing: true
                })
            }}> <AddBox/>Add New Blog</Button>
            
            <Table aria-label="basic table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Hero</th>
                    <th>Content</th>
                    <th>Writer</th>
                    <th>Published Date</th>
                    <th>Tags</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {(loading)?<tr><td colSpan={8}>Loading...</td></tr>:
                (
                    <>
                        {blogs.map(blog=>(
                            <tr>
                                 <td>{1}</td>
                                 <td>{blog.title}</td>
                                 <td><img src={blog.hero_image} alt="" width="100"/></td>
                                 <td>{blog.description}</td>
                                 <td>Admin</td>
                                 <td>{blog.created_at}</td>
                                 <td>{blog.tags}</td>
                                 <td><Button color="primary" className="m-2">View</Button><Button color="warning" className="m-2">Edit</Button>
                                 <Button color="danger" className="m-2">Delete</Button></td>
                                 </tr>
                        ))}
                    </>
                    // {blogs.map((blog:any,index:number)=>(
                    //     <tr>
                    //     <td>{index+1}</td>
                    //     <td>{blog.title}</td>
                    //     <td><img src={Dummy} alt="" width="100"/></td>
                    //     <td>{blog.description}</td>
                    //     <td>Admin</td>
                    //     <td>{blog.created_at}</td>
                    //     <td>{blog.tags}</td>
                    //     <td><Button color="primary" className="m-2">View</Button><Button color="warning" className="m-2">Edit</Button>
                    //     <Button color="danger" className="m-2">Delete</Button></td>
                    //     </tr>
                    // ))}
                )
            }
                
                
            </tbody>
            </Table>
               
        </>
    )
}