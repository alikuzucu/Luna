import styled from "styled-components";
import React, {useState} from "react";
import starImage from '../../assets/luna-project-assets/star.svg'
import commentImage from '../../assets/luna-project-assets/comment.svg'
import RestaurantImage from '../../assets/luna-project-assets/restaurant.svg'
import profileImage from '../../assets/luna-project-assets/edit.svg'
import Header from "../Registration/Header.jsx";
import {Container} from "../../styles/globalStyles.jsx";
import Profile from "./Profile.jsx";
import Footer from "../Registration/Footer.jsx";
import UserProfileReviews from "../../pages/UserProfile/UserProfileReviews.jsx";
import UserProfileComments from "../../pages/UserProfile/UserProfileComments.jsx";
import UserProfileRestaurant from "../../pages/UserProfile/UserProfileRestaurant.jsx";
import UserProfileEdit from "../../pages/UserProfile/UserProfileEdit.jsx";


const LeftContainer=styled.div`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 1em; /* Space between grid items */
      margin-top: 12%;
     margin-left: 10%;
     width: 25vw;
        height:25vh;
 `;

const RightContainer=styled.div`
  display: flex;
    position: relative;
  flex-direction: column;/* Two columns */
  gap: 1em; /* Space between grid items */
    margin-top: 1%;
     margin-left: 10%;
     width: 25vw;
        height:50vh;
 `;

const SpanContainer=styled.div`
  display: flex;
  flex-direction: row;/* Two columns */
  gap: 1em; /* Space between grid items */
    border-bottom: gray;
    border-bottom-width: thin;
    border-bottom-style: ridge;
 
 `;

const TextSpan=styled.span`
color:rgba(48, 48, 48, 1);
    font-size: 18px;
    font-family: "Roboto Light",serif;
    margin-left: 25px;

`;

   const OutsideContainer=styled.div`
    background-color: rgba(248, 248, 248, 1);
    display: flex;
    flex-direction: row;
    height: 95vh;
`;

     const Heading=styled.div`
     font-size: 18px;
         font-weight: bold;
         font-family: "Roboto Light",serif;
     `
     const Description=styled.div`
     font-size: 18px;
         font-weight: normal;
         font-family: "Roboto Light",serif;
         color: rgba(48, 48, 48, 1);

         
     `
function UserProfile(){
    const imageStyle = {
    width: '2vw',
        height:'2vh'
  };
const [currentComponent, setCurrentComponent] = useState(<UserProfileReviews />);

  const handleNavigation = (component) => {
    setCurrentComponent(component);
  };

return(
    <>
    <Header/>
         <Container>
              <Profile/>
    <OutsideContainer>
    <LeftContainer>
        <SpanContainer onClick={() => handleNavigation(<UserProfileReviews />)}><img src={starImage} alt="Review" style={imageStyle}/> <TextSpan>Reviews</TextSpan></SpanContainer>
        <SpanContainer onClick={() => handleNavigation(<UserProfileComments />)}><img src={commentImage} alt="Review" style={imageStyle}/> <TextSpan>Comments</TextSpan></SpanContainer>
        <SpanContainer onClick={() => handleNavigation(<UserProfileRestaurant />)}><img src={RestaurantImage} alt="Review" style={imageStyle}/> <TextSpan>Restaurants</TextSpan></SpanContainer>
        <SpanContainer onClick={() => handleNavigation(<UserProfileEdit />)}><img src={profileImage} alt="Review" style={imageStyle}/> <TextSpan>Edit profile</TextSpan></SpanContainer>
    </LeftContainer>
        {currentComponent}
        <RightContainer>
            <h4>ABOUT</h4>
            <Heading>
                <label>Location</label>
            </Heading>
            <Description>
                <label>Zurich</label>
            </Description>
            <Heading>
                <label>Luna member since</label>
            </Heading>
            <Description>
                <label>July2024</label>
            </Description>
            <Heading>
                <label>Things I love</label>
            </Heading>
            <Description>
                <label>Everything</label>
            </Description>
            <Heading>
                <label>Description</label>
            </Heading>
            <Description>
                <label>I am software Engineer</label>
            </Description>
        </RightContainer>
    </OutsideContainer>
         </Container>
        <Footer/>
        </>
)
}

export default UserProfile;