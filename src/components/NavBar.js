import React from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components'

const NavLinks = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 50px;
`

const NavLinkItem = styled.li` 
  list-style: none;
`

const NavLink = styled(Link)`
font-size: 2em;
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
        <NavLinks>
            <NavLinkItem>
                <NavLink to="/portfolio_website_new">About</NavLink>
            </NavLinkItem>
            <NavLinkItem>
                <NavLink to="/projects">Projects</NavLink>
            </NavLinkItem>
            <NavLinkItem>
                <NavLink to="/contact">Contact</NavLink>
            </NavLinkItem>
        </NavLinks>
        </div>
    )
}

export default NavBar;