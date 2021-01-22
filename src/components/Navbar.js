import React, { useContext } from "react"
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
} from "./NavbarElements"
import styled from "styled-components"
import logo from "../images/logo.svg"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"

const Navbar = ({ toggle }) => {
  return (
    <Wrapper>
      <>
        <Nav>
          <NavbarContainer>
            <Link to="/" className="nav-left">
              <img src={logo} alt="VC"></img>
            </Link>
            <MobileIcon onClick={toggle}>
              <GoThreeBars />
            </MobileIcon>
            <NavMenu>
              <NavItem className="nav-right">
                <Link to="/introduction/">Introduction</Link>
                <Link to="/encyclopedia/">Encyclopedia</Link>
                <Link to="/about/">About</Link>
                <Link to="/references/">References</Link>
                <Link to="/contact/">Contact</Link>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .nav-right a {
    width: 100px;
    height: 30px;
    margin: 0 30px;
    display: inline-block;
    color: #000;
    text-align: center;
    line-height: 1.6;
  }
  .nav-right a:hover {
    color: var(--clr-primary-5);
    border-bottom: 2px var(--clr-primary-5) solid;
    transition: 0.5s;
  }
  a.nav-left {
    margin-top: 10px;
  }
`

export default Navbar
