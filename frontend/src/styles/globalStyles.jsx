import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  background-color: rgba(248, 248, 248, 1);
  display: flex;
  flex-direction: column;
  height: 95vh;
`;

export const CommonButton = styled.button`
  width: 23vw;
  height: 6.23vh;
  background-color: rgba(228, 125, 49, 1);
  color: white;
  border-radius: 30px;
  border: none;
  margin-top: 100px;
  margin-left: 620px;

  @media (max-width: 768px) {
    width: 50vw;
    margin-left: 10vw;
  }

  @media (max-width: 480px) {
    width: 70vw;
    margin-left: 5vw;
  }
`;

export const RegistrationText = styled.div`
  margin-top: 8%;
  margin-left: 49%;
  border-bottom-width: medium;
  align-items: center;
  border-color: rgba(228, 125, 49, 1);    

  @media (max-width: 768px) {
    margin-left: 25%;
  }

  @media (max-width: 480px) {
    margin-left: 10%;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
  height: 71px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Text = styled.div`
  font-family: "Roboto Light", serif;
  font-weight: bold;
  font-size: 24px;
  align-items: center;
  color: rgba(76, 76, 76, 1);

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Name = styled.div`
  font-family: roboto, serif;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLink = styled.div`
  margin: 0 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: rgba(228, 125, 49, 1);
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40.57px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const LeftButton = styled.button`
  background-color: rgba(228, 125, 49, 1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 50%;
    border-radius: 20px 0 0 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 20px;
  }
`;

export const RightButton = styled.button`
  background-color: rgba(228, 125, 49, 1);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 50%;
    border-radius: 0 20px 20px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 20px;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  margin-top: 88.6vh;

  @media (max-width: 768px) {
    margin-top: 50vh;
  }
`;

export const UpFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  border-bottom: 1px solid lightgray;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UnListDiv = styled.ul`
  display: flex;
  list-style-type: none;
  text-decoration: none;
  text-underline: none;
  color: black;
  gap: 100px;
  font-family: "Roboto Light", serif;
  font-size: 24px;
  align-items: center;
  color: rgba(76, 76, 76, 1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const AnchorTagStyle = styled.a`
    text-decoration: none;
    color: black;
`;


export const SocialMediaDiv = styled.div`
  display: flex;
  justify-items: center;
  gap: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const CopyrightDiv = styled.div`
  display: flex;
  padding: 0px 30px;
`;

export default GlobalStyle;
