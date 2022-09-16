import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  color: #fff;

  &:last-of-type {
    margin-right: 0;
  }
  &.actual-page {
    border-bottom: 2px solid #fff;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="actual-page">
        Accueil
      </NavLink>
      <NavLink to={"/about"} activeClassName="actual-page">
        A propos
      </NavLink>
      <NavLink to={"/technos"} activeClassName="actual-page">
        Technologies
      </NavLink>
    </Nav>
  )
}

export default Navigation
