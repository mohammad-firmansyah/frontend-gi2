import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import HeaderHero from "../assets/header-dummy.png";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailBlog } from "../hooks/useGetDetailBlog";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Blog: React.FC = () => {
  const { id } = useParams()

  const {blog,loading,refetch} = useGetDetailBlog(id);

  const navigate = useNavigate();


  useEffect(() => {
    refetch();
    // console.log("id",blog)
  }, []);

  const Container = styled.div`
    .blog-header {
      padding: 15px;
      text-align: center;
      background: #55b76b;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .blog-title {
      padding: 0;
      margin: 0;
      color: white;
      flex-grow: 2;
    }

    .blog-body {
      width: 100%;
      padding: 36px;
      box-sizing: border-box;
    }

    .blog-hero-img {
      width: 100%;
      text-align: center;
      margin: 20px 0;
    }
    .blog-hero-img img {
      width: 50%;
    }

    .blog-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #555;
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    .blog-meta .tags {
      display: flex;
      gap: 10px;
    }

    .blog-meta .tags span {
      background: #effaf0;
      color: #55b76b;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 0.8rem;
    }

    .blog-content {
      line-height: 1.4;
      color: #333;
      font-size: 0.9rem;
      margin-top: 20px;
    }

    .footer {
      background: #f7f7f7;
      padding: 20px;
      text-align: center;
      margin-top: 40px;
      color: #777;
      font-size: 0.9rem;
    }

    .footer a {
      color: #55b76b;
      text-decoration: none;
      font-weight: bold;
    }

    .footer a:hover {
      text-decoration: underline;
    }

     @media (max-width: 480px) {
    .blog-header {
      padding: 10px;
    }

    .blog-title {
      font-size: 1.2rem;
    }

    .blog-body {
      padding: 15px;
    }

    .blog-hero-img img {
      width: 100%; /* Full width for very small screens */
    }

    .blog-content {
      font-size: 0.85rem;
    }

    .blog-meta{
    dispaly:flex;
    flex-direction:column;
    gap:10px;
    padding:10px;
    box-sizing:border-box;
    font-size:0.75rem;
    }

    .blog-meta .tags {
      display: flex;
      gap: 5px;
    }

    .footer {
      padding: 10px;
      font-size: 0.75rem;
    }
  }
  `;


  return (
    <Container>
      
      {/* Blog Header */}
      <div className="blog-header">
        <ArrowBack sx={{ color: "white" }} onClick={
          ()=>navigate("/")
        } />
        <h1 className="blog-title">Blogs</h1>
      </div>

      {(loading) ? <p>Loading...</p> : 
      (blog != null) ? 
      <>
      {/* Blog Body */}
      <div className="blog-body">
        {/* Meta Information */}
        <div className="blog-meta">
          <span>Written by <strong>{blog?.users?.fullname}</strong></span>
          <span>Published on: <strong>{new Date(blog?.blogs?.created_at).toLocaleString()}</strong></span>
          <div className="tags">
            {
              blog?.blogs?.tags?.split(",").map((tag, index) => (
                <span key={index}>#{tag}</span>))
            }
            {/* <span>#React</span>
            <span>#WebDev</span> */}
          </div>
        </div>

        {/* Content */}
        <div className="blog-content">
          <h2 style={{
            textAlign:"center",
            color:"#55b76b",
            margin:"60px auto"
          }}>{blog?.blogs?.title}</h2>
            {/* Hero Image */}
        <div className="blog-hero-img">
          <img src={blog?.blogs.hero_image} alt="header" />
      </div>
          <p style={{
            margin:"20px auto",
            width:"90%"
          }}>
            <ReactMarkdown children={blog?.blogs?.content} remarkPlugins={[remarkGfm]}>
            </ReactMarkdown>
          </p>
        </div>
      </div>
      </> 
      : 
      <p>Blog not found</p>
      
      }

      {/* Footer */}
      <div className="footer" style={{
      }}>
        <p>
          © 2024 Green Innovation Indonesia Inc. | Powered by <a href="https://reactjs.org/">Green Innovation Indonesia</a>
        </p>
        <p>
          Follow us on <a href="#twitter">Twitter</a>, <a href="#linkedin">LinkedIn</a>, and{" "}
          <a href="#github">GitHub</a>.
        </p>
      </div>
    </Container>
  );
};
