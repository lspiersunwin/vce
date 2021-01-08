import React, { useContext } from "react"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
} from "./NavbarElements"
import styled from "styled-components"
import logo from "../images/logo.svg"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
// import NavLink from "./NavLink"

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
                <Link to="/encyclopedia/">Encyclopedia</Link>
                <Link to="/about/">About</Link>
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

// const Navbar = () => {
//   return (
//     <Wrapper>
//       <div className="nav">
//         <div className="nav-header">
//           <div className="nav-left">
//             <Link to="/">
//               <img src={logo} alt="VC"></img>
//             </Link>
//           </div>

//           <button className="toggle-btn" id="toggle-btn" onClick={toggleSidebar()}>
//             <GoThreeBars />
//           </button>

//           <div className="nav-links">
//             <div className="nav-right">
//               <Link to="/encyclopedia/">Encyclopedia</Link>
//               <Link to="/about/">About</Link>
//               <Link to="/contact/">Contact</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.nav`
//   position: relative;
//   background: transparent;
//   z-index: 1;
//   height: 5rem;
//   display: flex;
//   align-items: center;

//   .nav {
//     position: absolute;
//     padding: 0 2rem;
//     width: 90vw;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }

//   .nav-header {
//     color: var(--clr-black);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     img {
//       width: auto;
//     }

//     .nav-right a {
//       width: 100px;
//       height: 30px;
//       margin: 0 30px;
//       display: inline-block;
//       color: #000;
//       text-align: center;
//       line-height: 1.6;
//     }
//     .nav-right a:hover {
//       color: var(--clr-primary-5);
//       border-bottom: 2px var(--clr-primary-5) solid;
//       transition: 0.5s;
//     }

//     .toggle-btn {
//       width: 3.5rem;
//       height: 2.25rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 1.5rem;
//       border-radius: 2rem;
//       border: transparent;
//       color: var(--clr-white);
//       background: var(--clr-primary-5);
//       cursor: pointer;
//       transition: var(--transition);
//       &:hover {
//         background: var(--clr-primary-3);
//       }
//     }
//   }

//   .nav-links {
//     display: none;
//     align-items: right;
//   }

//   @media (min-width: 800px) {
//     .nav-header {
//       .toggle-btn {
//         display: none;
//       }
//     }
//     .nav-links {
//       display: flex;
//     }

//     button {
//       color: var(--clr-white);
//       background: transparent;
//       border: transparent;
//       font-size: 1rem;
//       letter-spacing: 2px;
//       font-weight: 500;
//       padding: 10px 20px;
//       width: 100%;
//       text-transform: capitalize;
//       position: relative;
//     }
//   }
// `

export default Navbar
