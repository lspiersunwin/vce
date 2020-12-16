import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <div>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <Link to="/" onClick={toggle} className="btn">
                Home
              </Link>
              <Link to="/encyclopedia/" onClick={toggle} className="btn">
                Encyclopedia
              </Link>
              <Link to="/about/" onClick={toggle} className="btn">
                About
              </Link>
              <Link to="/contact/" onClick={toggle} className="btn">
                Contact
              </Link>
            </SidebarMenu>
          </SidebarWrapper>
        </SidebarContainer>
      </div>
    </>
  )
}

export default Sidebar
