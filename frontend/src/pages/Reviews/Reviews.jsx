// import Header from "../../components/Registration/Header.jsx";
import styled from "styled-components";
import {Container} from "../../styles/globalStyles.jsx";


const Wrapper = styled.div`
    position: relative;
    
`;
const ImageStyle = styled.div`
    img {
        height: 200px;
        width: 100%;
    }
`;

const RestaurantSlider = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    height: 204px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 130px;
    padding-top: 32px;

    div {
        display: flex;
    }

    div > p {
        margin-left: 30px;
    }

    h1 {
        margin-bottom: 13px;
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
    }
    
    img {
        height: 60px
    }
`;

const ReviewInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    height: 100vh;

    img {
        filter: opacity(30%);
    }

    div {
        margin-top: 40px;
        width: 650px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    p {
        margin-left: 33px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #7E7E7E;
    }

    form {
        width: 650px;
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        margin-top: 25px;
    }

    textarea {
        width: 830px;
        height: 260px;
        padding: 20px;
        font-size: 16px;
        color: #BBB7B7;
        border: 1px solid #EBEBEB;
        border-radius: 3px;
    }

    form > button {
        background-color: #E47D31;
        color: black;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        height: 40px;
        width: 120px;
        font-weight: 400;
        font-size: 16px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        margin-left: 100%;
        margin-top: 31px;
    }
`;
const Reviews = () => {
    return (
        <Container>
            <Wrapper>
            <ImageStyle>
                <img src="/images/icons/review-img.png" alt="ReviewImage"/>
            </ImageStyle>
            <RestaurantSlider>
                <h1>Läderach Chocolatier Suisse</h1>
                <p>Chocolatiers & Shops</p>
                <div>
                    <div>
                        <img src="/images/icons/star-full.png" alt="FullStar"/>
                        <img src="/images/icons/star-full.png" alt="FullStar"/>
                        <img src="/images/icons/star-full.png" alt="FullStar"/>
                        <img src="/images/icons/star-half.png" alt="HalfStar"/>
                        <img src="/images/icons/star-empty.png" alt="EmptyStar"/>
                    </div>
                    <p>68 reviews</p>
                </div>
            </RestaurantSlider>
                </Wrapper>
            <ReviewInput>
                <div>
                    <img src="/images/icons/star.svg" alt="Star"/>
                    <img src="/images/icons/star.svg" alt="Star"/>
                    <img src="/images/icons/star.svg" alt="Star"/>
                    <img src="/images/icons/star.svg" alt="Star"/>
                    <img src="/images/icons/star.svg" alt="Star"/>
                </div>
                <form>
                    <textarea
                        placeholder= "Your review helps others learn about great local businesses.
Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.
"
                        required />
                    <button type="submit">SUBMIT</button>
                </form>
            </ReviewInput>

        </Container>
)
}


export default Reviews

