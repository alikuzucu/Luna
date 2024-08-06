import {CommonButton, Container, RegistrationText,Text} from "../../styles/globalStyles.jsx";
import Header from "../../components/Registration/Header.jsx";
import Footer from "../../components/Registration/Footer.jsx";
import styled from "styled-components";
import {Link} from "react-router-dom";

 const FormData=styled.form`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 2em; /* Space between grid items */
      margin-top: 5%;
     margin-left: 15%;
 `;

 const Paragraph=styled.div`
     margin-top:2%;
     margin-left: 38%;
     width: 34vw;
     Height:10vh;
     color:rgba(76, 76, 76, 1);
 `;

  export const ContinueButton=styled.button`
    width: 15vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
    border: none;
    margin-top: 3%;
    margin-left: 46%;
`;
function RegistrationMessage(){
    return(
        <>
               <Header/>
<Container>
<FormData>
    <RegistrationText>
        <Text>REGISTRATION</Text>
    </RegistrationText>
    <Paragraph>Thank for your registration.Our hard working monkeys are preparing a digital message called
    E-mail that will be sent to you soon. Since monkeys arent good in writing message could end up in your junk folder. Our apologies for any inconvenience.
    </Paragraph>
    <Link to="/registration-verification">
        <ContinueButton>Continue</ContinueButton>
    </Link>
</FormData>
    </Container>
             <Footer/>
   </>
    )

}

export default RegistrationMessage;