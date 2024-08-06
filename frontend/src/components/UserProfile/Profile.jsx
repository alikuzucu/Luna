import styled from "styled-components";
import backgroundImage from '../../assets/zuerich-skyline.svg'


const ProfileSection=styled.div`
    position: relative;
 `;

const ProfileHeader=styled.div`
    position: absolute;
  top: 20%;
  left: 10%;
  display: flex;
  flex-direction: row;
    `
;

const ProfileDetails =styled.div`
position: relative;
  left: 4%;
    color:rgba(255, 255, 255, 1);
  padding: 2px;
    font-size: medium;
`;

const ProfileText=styled.p`
    font-size: 10px;
`;
function Profile()
{
    const imageStyle = {
    width: '25vw',
        height:'25vh',
    borderRadius: '5px',
  };
return (

     <ProfileSection>

          <img
            src={backgroundImage}
            alt="Profile Header"

          />
          <ProfileHeader>
            <img
              src={backgroundImage}
              alt="User"
            style={imageStyle}
            />

              <ProfileDetails>
            <h4 className>Julian Cox</h4>
            <ProfileText>Zürich, CH</ProfileText>
            <ProfileText>6 reviews</ProfileText>
            <ProfileText>210 comments</ProfileText>
                  </ProfileDetails>
              </ProfileHeader>

     </ProfileSection> )


}

export default Profile;