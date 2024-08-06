
import { Link } from 'react-router-dom';
import { Buttons, Name, Navbar, NavLink, NavLinks, LeftButton, RightButton } from "../../styles/globalStyles";

function Header() {
    return (
        <Navbar>
            <Name>LUNA</Name>
            <NavLinks>
                <NavLink as={Link} to="/">Home</NavLink>
                <NavLink as={Link} to="/restaurants">Search</NavLink>
                <NavLink as={Link} to="/registration">Profile</NavLink>
            </NavLinks>
            <Buttons>
                <LeftButton as={Link} to="/registration">SIGNUP</LeftButton>
                <RightButton as={Link} to="/login">LOGIN</RightButton>
            </Buttons>
        </Navbar>
    );
}

export default Header;
