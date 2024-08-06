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
  gap: 26em; /* Space between grid items */
   
 
 `;

const TextSpan=styled.span`
color: rgba(76, 76, 76, 1);
;
    font-size: 16px;
    font-family: "Roboto Light",serif;
    margin-left: 25px;

`;

const DateSpan=styled.span`
color: rgba(76, 76, 76, 1);
;
    font-size: 12px;
    font-family: "Roboto Light",serif;

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
function UserProfileComments(){
    return(<Container>
    <Heading>COMMENTS</Heading>
        <SpanContainer><TextSpan>Review 1</TextSpan><DateSpan>15 July 2024 </DateSpan></SpanContainer>
        <DescriptionText>Thats good idea</DescriptionText>
        <HorizontalLine/>

</Container>)
}

export default UserProfileComments;