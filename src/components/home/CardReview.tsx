import styled from "@emotion/styled"
import hero from "../../assets/woman.svg"
import one from "../../assets/1.jpg"
import two from "../../assets/2.jpg"
import three from "../../assets/3.jpg"
import four from "../../assets/4.jpg"
import five from "../../assets/5.png"
import six from "../../assets/6.jpg"
import star from "../../assets/star.svg"
import smile from "../../assets/smile.svg"

const Container = styled.div`
    .card{
        box-sizing:border-box;
        width: 300px;
        border: 1px solid #55B76B;
        display:flex;
        flex-direction: column;
        align-items:center;
        border-radius: 20px;
        padding: 20px;
    }

    .card-img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .card-content{
        font-size: 13px;
    }

    .container-decoration{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .star{
        width:100%;
        display:flex;
        gap:10px;
    }
`

export const CardReview = ({id,name,job,review}) => {
    return (
        <Container>
            <div className="card">
                {(id === "1") ? <img className="card-img" src={one}/> : 
                (id === "2") ? <img className="card-img" src={two}/> : 
                (id === "3") ? <img className="card-img" src={three}/> : 
                (id === "4") ? <img className="card-img" src={four}/> :
                (id === "5") ? <img className="card-img" src={five}/> :
                (id==="6") ? <img className="card-img" src={six}/> : null }

                <div className="card-title">
                    <br />
                    {name}
                    </div>
                <p style={{
                    fontSize: "12px",
                    color: "#55B76B"
                }}>
                    {job}
                </p>


                <p className="card-content">
                    <br />
                "{review}"
                    </p>

                <div className="container-decoration">

                <div className="star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>

                <div className="smile">
                    <img src={smile} alt="" />
                </div>
                </div>
            </div>
        </Container>
    )
}