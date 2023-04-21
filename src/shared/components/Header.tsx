import React from 'react';
import { HeaderContainer, Logo, Nav, NavLink } from '../styles/Header'


const Header: React.FC<{ src: string }> = ({ src }) => {
    return (
        <HeaderContainer>
            <Logo src={src} alt="Logo" />
            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
