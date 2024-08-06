import ProfilePic from '../../../public/images/icons/profile.png'
import FullStar from '../../../public/images/icons/star-full.png'
import HalfStar from '../../../public/images/icons/star-half.png'
import EmptyStar from '../../../public/images/icons/star-empty.png'
import LikeIcon from '../../../public/images/icons/like.png'
import styled from "styled-components";


const ReviewCardContainer = styled.div`
    background-color: white;
    width: 650px;
    height: 188px;
    padding: 11px;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    margin-top: 15px;

    h3, h4 {
        color: #E47D31;
        width: 130px;
    }

    p {
        font-size: 12px;
    }

    hr {
        position: relative;
        background-color: #cccccc4d;
        border: none;
        margin-left: -10px;
        margin-right: -10px;
        margin-bottom: 10px;
        height: 1px;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 17px;

    button {
        background-color: rgba(145, 145, 145, 0.6);
        color: white;
        height: 25px;
        width: 130px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-style: normal;
        line-height: 18px;
    }
`;

const ViewAllCommentsBtn = styled.div`
    button {
        background-color: white;
        color: #E47D31;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        border: none;
        margin-left: 235px;

    }
`;

const Btnleft = styled.div`
    button {
        border-right: solid white 1px;
        border-bottom-left-radius: 28px;
        border-top-left-radius: 28px;
    }

    p {
        margin-left: 10px;
        margin-right: 5px;
    }
`;

const BtnRight = styled.div`
    button {
        border-left: solid white 1px;
        border-bottom-right-radius: 28px;
        border-top-right-radius: 28px;
    }
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    margin-left: -11px;

    div:nth-child(3) {
        margin-left: 20px;
        width: 150px;
    }

    img {
        margin-right: 5px;
        margin-top: 0px;
    }

`;

const TimeStamp = styled.div`
    p {
        margin-left: 180px;
        height: 70px;

    }
`;
const ImageStyle = styled.div`
    img {
        height: 80px;
    }
`;
const MainStyle = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 18px;
    font-size: 16px;
    font-weight: 300;

    h3 {
        padding-bottom: 10px;
    }

    button {
        background-color: white;
        border: none;
        color: #E47D31;
        font-weight: 700;
    }

`;

const ReviewFilterCard = (props) => {
    console.log(props.reviewProps?.creator.first_name);
    return (
        <ReviewCardContainer>
            <StyledHeader>
                <ImageStyle>
                    <img src={ProfilePic} alt="ProfilePic"/>
                </ImageStyle>
                <div>
                    <h3>{props.reviewProps ? props.reviewProps?.creator.first_name + " " + props.reviewProps?.creator.last_name : "Laurent H"}</h3>
                    <p>6 reviews in total</p>
                </div>
                <div>
                    <img src={FullStar} alt="FullStar"/>
                    <img src={FullStar} alt="FullStar"/>
                    <img src={FullStar} alt="FullStar"/>
                    <img src={HalfStar} alt="HalfStar"/>
                    <img src={EmptyStar} alt="EmptyStar"/>
                </div>
                <TimeStamp>
                    <p>{props.reviewProps?.created ? "07.11.2024 01:32" : "01.01.2018 15:22"}</p>
                </TimeStamp>
            </StyledHeader>
            <hr/>
            <MainStyle>
                {props.reviewProps ? props.reviewProps.text_content : "This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service."}
            </MainStyle>
            <BtnContainer>
                <Btnleft>
                    <button>
                        <img src={LikeIcon} alt="LikeIcon"/>
                        <p>Like 63</p>
                    </button>
                </Btnleft>
                <BtnRight>
                    <button>
                        <p>Comment 23</p>
                    </button>
                </BtnRight>
                <ViewAllCommentsBtn>
                    <button>View all comments</button>
                </ViewAllCommentsBtn>
            </BtnContainer>
        </ReviewCardContainer>
    );
}

export default ReviewFilterCard
