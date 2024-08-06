import Header from "../../components/Registration/Header.jsx";
import {CommonButton, Container, RegistrationText,Text} from "../../styles/globalStyles.jsx";
import styled from "styled-components";
import Footer from "../../components/Registration/Footer.jsx";


 const InputText=styled.input`
  width: 30vw;
     Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

 const FormData=styled.form`
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* Two columns */
  gap: 2em; /* Space between grid items */
      margin-top: 5%;
     margin-left: 35%;
 `;

 const Input=styled.div`
  display: flex;
  flex-direction: row;
       gap: 2em;
 `;

 export const SetNewPassButton=styled.button`
    width: 15vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
    border: none;
    margin-top: 5%;
    margin-left: 46%;
`;

function NewPassword(){
return(
    <>
        <Header/>
<Container>
    <FormData>
    <RegistrationText>
        <Text>NEW PASSWORD</Text>
    </RegistrationText>
        <Input>
   <InputText placeholder={"E-Mail address"}/>
        <InputText placeholder={"Validation code"}/>
            </Input>
        <Input>
        <InputText placeholder={"New password"}/>
        <InputText placeholder={"New password repeat"}/>
        </Input>
    <SetNewPassButton>Set New Password</SetNewPassButton>
        </FormData>
 </Container>
  <Footer/>

   </>
)

}

export default NewPassword