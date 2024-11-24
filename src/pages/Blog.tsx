import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import HeaderHero from "../assets/header-dummy.png";

export const Blog: React.FC = () => {
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
      line-height: 1.6;
      color: #333;
      font-size: 1rem;
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
  `;

  return (
    <Container>
      {/* Blog Header */}
      <div className="blog-header">
        <ArrowBack sx={{ color: "white" }} />
        <h1 className="blog-title">Blogs</h1>
      </div>

      {/* Blog Body */}
      <div className="blog-body">
        {/* Meta Information */}
        <div className="blog-meta">
          <span>Written by <strong>John Doe</strong></span>
          <span>Published on: <strong>November 16, 2024</strong></span>
          <div className="tags">
            <span>#Tech</span>
            <span>#React</span>
            <span>#WebDev</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="blog-hero-img">
          <img src={HeaderHero} alt="header" />
        </div>

        {/* Content */}
        <div className="blog-content">
          <h2>Understanding React in 2024</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            voluptas fugit tempora ipsum, voluptatem numquam adipisci
            perferendis unde. Quaerat, non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
            veniam dolores laudantium deserunt quaerat eligendi atque! Nobis,
            ipsa quidem!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>
          © 2024 Blog Inc. | Powered by <a href="https://reactjs.org/">React</a>
        </p>
        <p>
          Follow us on <a href="#twitter">Twitter</a>, <a href="#linkedin">LinkedIn</a>, and{" "}
          <a href="#github">GitHub</a>.
        </p>
      </div>
    </Container>
  );
};
