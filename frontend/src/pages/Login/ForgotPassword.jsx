import Header from "../../components/Registration/Header.jsx";
import {CommonButton, Container, RegistrationText,Text} from "../../styles/globalStyles.jsx";
import styled from "styled-components";
import Footer from "../../components/Registration/Footer.jsx";

 const FormData=styled.form`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 2em; /* Space between grid items */
      margin-top: 5%;
     margin-left: 15%;
 `;

 const Input=styled.input`
     margin-top: 5%;
     margin-left: 42%;
     width: 25vw;
Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

 export const SendCodeButton=styled.button`
    width: 15vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
    border: none;
    margin-top: 5%;
    margin-left: 46%;
`;

function ForgotPassword(){
return(
    <>
        <Header/>
<Container>
    <FormData>
    <RegistrationText>
        <Text>FORGOT PASSWORD</Text>
    </RegistrationText>
   <Input placeholder={"E-Mail address"}/>
    <SendCodeButton>Send Code</SendCodeButton>
        </FormData>
 </Container>
  <Footer/>

   </>
)

}

export default ForgotPassword