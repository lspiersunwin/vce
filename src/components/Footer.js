import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p className="foot">
        &copy; {new Date().getFullYear()} Lawrence Spiers-Unwin. All rights
        reserved.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  padding: 1rem;
  .foot {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer
