import {CommonButton, Container, RegistrationText, Text} from "../../styles/globalStyles.jsx";
import Header from "../../components/Registration/Header.jsx";
import Footer from "../../components/Registration/Footer.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest.js";

 const Email=styled.input`
     width: 35vw;
     Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

 const FormData=styled.form`
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* Two columns */
  gap: 2em; /* Space between grid items */
      margin-top: 5%;
     margin-left: 15%;
 `;

 const Input=styled.div`
  display: flex;
  flex-direction: row;
       gap: 2em;
 `;

 export const Registration=styled.button`
    width: 23vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
    border: none;
    margin-top: 2%;
    margin-left: 20%;
`;
function RegistrationVerification() {
    const registeredEmail = localStorage.getItem("registered_email");
    const [email, setEmail] = useState(registeredEmail || '');
    // const [userData, setUserData] = useState({ email: registeredEmail });
    const [code, setCode] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password_repeat, setPasswordRepeat] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [location, setLocation] = useState('')

    const navigate = useNavigate();

    const {sendRequest, error, data} = useApiRequest({auth: false});

    const handleValidationSubmit = (e) => {
        e.preventDefault();

        if (password !== password_repeat) {
            return alert('Passwords do not match');
        }

        const userData = {
          email,
          code,
          username,
          password,
          password_repeat,
          first_name,
          last_name,
          location,
        };

        console.log("User Data:", userData);
        sendRequest("patch", "auth/registration/validation/", userData);
    };

    useEffect(() => {
        console.log("Data:", data);
        if (data) {
          navigate("/");
          localStorage.removeItem("registered_email");
        }
      }, [data, navigate]);

    return (
            <>
                <Header/>
                <Container>

                    <RegistrationText>
                        <Text>VERIFICATION</Text>
                    </RegistrationText>
                    <FormData>
                        <Input>
                            <Email
                                type="email"
                                placeholder={"E-Mail address"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Email
                                type="text"
                                placeholder={"Validation code"}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </Input>
                        <Input>
                            <Email
                                type="text"
                                placeholder={"First name"}
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Email
                                type="text"
                                placeholder={"Last name"}
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Input>
                        <Input>
                            <Email
                                type="text"
                                placeholder={"Username"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Email
                                type="text"
                                placeholder={"Location"}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Input>
                        <Input>
                            <Email
                                type="password"
                                placeholder={"Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Email
                                type="password"
                                placeholder={"Password repeat"}
                                value={password_repeat}
                                onChange={(e) => setPasswordRepeat(e.target.value)}
                            />
                        </Input>
                        <Registration onClick={handleValidationSubmit}>Finish registration</Registration>
                    </FormData>

                </Container>
                <Footer/>
            </>
        )

    }

    export default RegistrationVerification;

