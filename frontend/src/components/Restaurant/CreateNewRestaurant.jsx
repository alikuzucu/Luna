import {Container, RegistrationText, Text} from "../../styles/globalStyles.jsx";
import Header from "../../components/Registration/Header.jsx";
import Footer from "../../components/Registration/Footer.jsx";
import styled from "styled-components";

const InputContainer=styled.div`
  display: flex;
  flex-direction: row;
       gap: 2em;
 `;

const ChildContainer=styled.div`
  display: flex;
  flex-direction: column;
       gap: 1em;
 `;

 const Input=styled.input`
     width: 20vw;
     Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

 const Label=styled.label`
color: rgba(151, 151, 151, 1);
    font-size: 14px;
    font-family: "Roboto Light",serif;
     font-weight: bold;
`;

 const FormData=styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr); 
  gap: 2em; /* Space between grid items */
      margin-top: 2%;
     margin-left: 10%;
 `;
  export const SubmitButton=styled.button`
    width: 10vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
     margin-top: 1%;
    border: none;
      margin-left: 25%;
`;

    export const ChooseMediaButton=styled.button`
    width: 15vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
     margin-top: 1%;
    border: none;
`;
const CreateNewRestaurant = () => {
  return (
      <>
      <Header/>
    <Container>
        <RegistrationText style={{ marginLeft: '32%', marginTop:'1%' }}>
        <Text>CREATE NEW RESTAURANT</Text>
    </RegistrationText>
      <FormData>
    <InputContainer>
        <ChildContainer>
        <Label>Name</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Category</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Country</Label>
        <Input/>
    </ChildContainer></InputContainer>
          <InputContainer>
        <ChildContainer>
        <Label>Street</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>City</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Zip</Label>
        <Input/>
    </ChildContainer></InputContainer>
          <InputContainer>
        <ChildContainer>
        <Label>Website</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Phone</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Email</Label>
        <Input/>
    </ChildContainer></InputContainer>
          <InputContainer>
        <ChildContainer>
        <Label>Details</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Price level</Label>
        <Input/>
    </ChildContainer>
          <ChildContainer>
        <Label>Image</Label>
              <ChooseMediaButton>CHOOSE A FILE</ChooseMediaButton>
    </ChildContainer></InputContainer>
<SubmitButton>Submit</SubmitButton>
      </FormData>
    </Container>
    <Footer/>
          </>
  );
};

export default CreateNewRestaurant;
