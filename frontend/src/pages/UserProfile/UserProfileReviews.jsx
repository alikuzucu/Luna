import styled from "styled-components";

const Container=styled.div`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 1em; /* Space between grid items */
      margin-top: 1%;
    margin-left: 15%;
    width: 100vw;
    height: 52vh;
    background-color:  rgba(255, 255, 255, 1);
 `;

const SpanContainer=styled.div`
  display: flex;
  flex-direction: row;/* Two columns */
  gap: 20em; /* Space between grid items */
   
 
 `;

const TextSpan=styled.span`
color: rgba(76, 76, 76, 1);
;
    font-size: 16px;
    font-family: "Roboto Light",serif;
    margin-left: 25px;

`;

const DescriptionText=styled.span`
color:rgba(48, 48, 48, 1);
    font-size: 14px;
    font-family: "Roboto Light",serif;
    margin-left: 25px;

`;
const Heading=styled.div`
     font-size: 18px;
         font-weight: bold;
         font-family: "Roboto Light",serif;`

const HorizontalLine=styled.div`
border-bottom-style: ridge;
    border-bottom-width: thin;
    color: #a5a5a5;
`;

const DateSpan=styled.span`
color: rgba(76, 76, 76, 1);
;
    font-size: 12px;
    font-family: "Roboto Light",serif;

`;

function UserProfileReviews(){
    return(<Container>
    <Heading>REVIEWS</Heading>
        <SpanContainer><TextSpan>Restaurant Villa Toscana</TextSpan><DateSpan>15 July 2024 </DateSpan></SpanContainer>
        <DescriptionText>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.
        </DescriptionText>
        <HorizontalLine/>

</Container>)
}

export default UserProfileReviews;