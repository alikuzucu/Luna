import Header from "../../components/Registration/Header.jsx";
import {CommonButton, Container, RegistrationText,Text} from "../../styles/globalStyles.jsx";
import styled from "styled-components";
import Footer from "../../components/Registration/Footer.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest.js";
import {useDispatch} from 'react-redux'
import {loginUser} from "../../store/slices/loggedInUser.js";

 const FormData=styled.form`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 2em; /* Space between grid items */
      margin-top: 5%;
     margin-left: 15%;
 `;

 const Input=styled.input`
     margin-top: 5%;
     margin-left: 40%;
     width: 25vw;
Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

 export const LoginButton=styled.button`
    width: 15vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
    border: none;
    margin-top: 5%;
    margin-left: 46%;
`;

function Login(){
    // const registeredEmail = localStorage.getItem("registered_email");
    const [email, setEmail] = useState( '');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {sendRequest, error, data} = useApiRequest();


    const handleLogin = (e) => {
        e.preventDefault();
        const user = {email, password}
        console.log("User:", user);
        sendRequest('post', 'auth/token/', user);
    };

    useEffect(() => {
        console.log("Data:", data);
        if(data == null) {
            return
        }
        if(data.access){
            dispatch(loginUser({user: data.user, accessToken: data.access}));
            localStorage.setItem('auth-token', data.access);
            sendRequest('get', "me/")
        }
        if (data.email){
            console.log('user', data)
            dispatch(loginUser({user: data, accessToken: data.access}));
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/restaurants');
        }
    }, [data, dispatch, navigate])


    return(
        <>
            <Header/>
    <Container>
        <FormData onSubmit={handleLogin}>
        <RegistrationText>
            <Text>LOGIN</Text>
        </RegistrationText>
       <Input
           type="text"
           placeholder={"Username"}
           value={email}
           onChange={(e) => setEmail(e.target.value)}
       />
            <Input
                type='password'
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}

            />
        <LoginButton type="submit">Login</LoginButton>
            </FormData>
     </Container>
      <Footer/>

       </>
    )

    }

export default Login