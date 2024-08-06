import Header from "../../components/Registration/Header.jsx";
import {CommonButton, Container, RegistrationText,Text} from "../../styles/globalStyles.jsx";
import styled from "styled-components";
import Footer from "../../components/Registration/Footer.jsx";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest.js";



 const FormData=styled.form`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 2em; /* Space between grid items */
      margin-top: 5%;
     margin-left: 15%;
 `;

 const Email=styled.input`
     margin-top: 5%;
     margin-left: 40%;
     width: 25vw;
Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

 export const RegistrationButton=styled.button`
    width: 15vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
    border: none;
    margin-top: 5%;
    margin-left: 46%;
`;

function Registration(){
    const [userEmail, setEmail] = useState('')
    const navigate = useNavigate()
    const { sendRequest, error, data } = useApiRequest({auth: false})

    const handleSignUpClick = async (e) => {
        e.preventDefault()
        sendRequest('post', 'auth/registration/', { email: userEmail })
    }

    React.useEffect(() => {
        console.log(data)
        if (data) {
            localStorage.setItem('registered_email', userEmail);
            navigate('/registration-message')
        }
    }, [data, navigate, userEmail]);



  return(
    <>
        <Header/>
<Container>
    <FormData>
    <RegistrationText>
        <Text>REGISTRATION</Text>
    </RegistrationText>
   <Email
       placeholder={"Email"}
       type="email"
       value={userEmail}
       onChange={(e) => setEmail(e.target.value)}
   />
    <RegistrationButton onClick={handleSignUpClick}>Register</RegistrationButton>
        </FormData>
 </Container>
  <Footer/>

   </>
)

}

export default Registration

