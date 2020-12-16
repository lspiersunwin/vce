import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 3.5rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 2rem;
    border: transparent;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--clr-primary-3);
    }
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
