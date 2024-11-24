import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom";

const Container = styled.div`

    .card{
        padding:10px;
        background:white;
        border-radius:20px;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
        text-align:center;
        }

    .card-hero img{
        width:100%;
        border-radius:20px;
    }
    
    .card-content{
        font-family: "Lato", sans-serif;
    }

    .cta{
        padding: 10px 20px;
        border:0;
        background:#55B76B;
        border-radius: 5px;
        font-family: "Laot", sans-serif;
        font-weight: bold;
        color:white;
        }
    .desc{
        font-size:16px  ;
    }
`

export const BlogCard = ({hero, title, desc, url})=>{
    const navigate = useNavigate();

    return(
        <Container>

        <div className="card">
            <div className="card-hero">
                <img src={hero} alt={title} />
            </div>
            <div className="card-content">
                <h2 className="title">{title}</h2>
                <p className="desc">{desc}</p>
                <button className="cta" onClick={()=>{
                    navigate("blog/"+url)
                }}>Read More</button>
            </div>
        </div>
        </Container>
    )
}