import React from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components'

const Name = styled.h1`
text-align: center;
color: #E0B0FF;
font-size: 3em;
font-weight: 500;

`

const NavLinks = styled.ul`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding-right: 50px;
`

const NavLinkItem = styled.li` 
  list-style: none;
`

const NavLink = styled(Link)`
font-size: 1.5em;
color: #E0B0FF;
text-decoration: none;
&:hover {
    box-shadow: inset 120px 0 0 0 #C5C6D0;
    color: #4E2A84;
}
`

const NavBar = () => {
    return(
        <div>
        <header>
            <Name>Beth Lupton</Name>
        <NavLinks>
            <NavLinkItem>
                <NavLink to="/portfolio_website_new">About |</NavLink>
            </NavLinkItem>
            <NavLinkItem>
                <NavLink to="/projects">Projects |</NavLink>
            </NavLinkItem>
            <NavLinkItem>
                <NavLink to="/contact">Contact |</NavLink>
            </NavLinkItem>
        </NavLinks>
        </header>
        </div>
    )
}

export default NavBar;