import styled from "styled-components";
import LocationIcon from '../../assets/luna-project-assets/pin.svg';
import PhoneIcon from '../../assets/luna-project-assets/phone.svg';
import ComputerIcon from '../../assets/luna-project-assets/web.svg';
import FiveStars from '../../../public/images/icons/5stars_100px.png';

const Wrapper = styled.div`
    position: relative;
`;

const ImageStyle = styled.div`
    img {
        height: 400px;
        width: 100%;
    }`;

const RestaurantDetailsCard = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #4C4C4C;
    height: 336px;
    width: 360px;
    background-color: white;
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 70%;
    right: 0;
    bottom: 0;
`;

const RestaurantDetails = styled.div`
    div {
        display: flex;
        margin-top: 24px;
        margin-left: 30px;
    }

    img {
        margin-right: 34px;
        width: 20px;
    }
`;

const RestaurantSlider = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
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
        margin-top: 0.2em;
        height: 20px;
        object-fit: cover;
        object-position: 0% 0%;
    }
`;


const RestaurantHeader = props => {
    const numberAbovefour = () => {
        const rating = Math.floor(Math.random() * 40 + 10) / 10;
        if (rating > 3.8) {
            console.log(rating)
            return rating;
        } else {
            console.log(rating)
            return 3.8;
        }
    }
    const category = () => {
        if (props.category === 1) return "Asian";
        if (props.category === 2) return "Mexican";
        if (props.category === 3) return "Chinese";
        if (props.category === 4) return "Vegetarian";
    };

    return (
        <Wrapper>
            <ImageStyle>
                <img src={props.image} alt="image"/>
            </ImageStyle>
            <RestaurantSlider>
                <h1>{props.name}</h1>
                <p>{category}</p>
                <div>
                    <div>
                        <img className="stars"
                             src={FiveStars}
                             alt="Stars rating"
                             style={{width: `calc(100pxx * ${numberAbovefour() / 5})`}}/>
                    </div>
                    <p>{Math.floor(Math.random() * 100)} Reviews</p>
                </div>
            </RestaurantSlider>
            <RestaurantDetailsCard>
                <RestaurantDetails>
                    <div>
                        <img src={LocationIcon} alt="MapIcon"/>
                        <p>{props.street}</p>
                    </div>
                    <div>
                        <img src={PhoneIcon} alt="PhoneIcon"/>
                        <p>{props.telephone}</p>
                    </div>
                    <div>
                        <img src={ComputerIcon} alt="ComputerIcon"/>
                        <p>laederach.com</p>
                    </div>
                </RestaurantDetails>
            </RestaurantDetailsCard>
        </Wrapper>
    )
};

export default RestaurantHeader;
