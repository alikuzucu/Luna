import styled from "styled-components";

const Container=styled.div`
  display: flex;
  flex-direction: column;/* Two columns */
  gap: 1em; /* Space between grid items */
      margin-top: 1%;
    margin-left: 15%;
    width: 100vw;
    background-color:  rgba(255, 255, 255, 1);
 `;

const Heading=styled.div`
     font-size: 18px;
         font-weight: bold;
         font-family: "Roboto Light",serif;`

 const InputText=styled.input`
     margin-top: 1rem;
     width: 15vw;
     margin-left: 3%;
Height:5vh;
     border-color: rgba(235, 235, 235, 1);
 `;

const Label=styled.label`
color: rgba(151, 151, 151, 1);
    font-size: 14px;
    font-family: "Roboto Light",serif;
    margin-left: 25px;
`;

 export const SavButton=styled.button`
    width: 10vw;
    height: 6.23vh;
    background-color:  rgba(228, 125, 49, 1);
    color: white;
    border-radius: 30px;
     margin-top: 1%;
    border: none;
`;

 export const DeleteAccount=styled.label`
   color: red;
     margin-left: 40%;
`;

function UserProfileEdit()
{return(<Container>
    <Heading>EDIT USERPROFILE</Heading>
    <form>
        <div>
            <div><Label>Username</Label></div>
            <InputText/>
        </div>
        <div>
            <div><Label>First name</Label></div>
            <InputText/>
        </div>
        <div>
            <div><Label>Last name</Label></div>
            <InputText/>
        </div>
        <div>
            <div><Label>E-mail</Label></div>
            <InputText/>
        </div>
        <div>
            <div><Label>Location</Label></div>
            <InputText/>
        </div>
        <div>
            <div><Label>Phone</Label></div>
            <InputText/>
        </div>
        <div>
            <div><Label>Things i love</Label></div>
            <InputText/>
        </div>
        <div>

            <div><Label>Description</Label></div>
            <InputText/>
        </div>
        <span><SavButton>SAVE</SavButton> <DeleteAccount>Delete Account</DeleteAccount></span>
    </form>
</Container>)
}

export default UserProfileEdit;