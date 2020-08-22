/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`
  height: 100vh;
  width: 80vw;
  display: flex;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
  box-sizing: border-box;
`

const StyledMain = styled.main`
  align-items: flex-start;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  width: 23.4375em;
  height: 50.75em;
  position: relative;
  border-radius: 3.75em;
  padding: 0.9375em;
  box-sizing: content-box;
  box-shadow: 0 0.125em 0.125em 0.1875em rgba(var(--color-dark), 1),
    0 -0.0625em 0.25em 0.1875em rgba(var(--color-light), 0.55),
    0 -0.0625em 0.25em 0.1875em rgba(var(--color-dark), 1),
    0 0 0 0.5em rgba(var(--color-light), 0.11),
    0 0 0 0.5em rgba(var(--color-dark), 1),
    inset 0 -0.1875em 0.3125em 0 rgba(var(--color-light), 0.1),
    inset 0 -0.1875em 0.3125em 0 rgba(var(--color-dark), 1),
    inset 0 -0.3125em 0.125em 0.25em rgba(var(--color-dark), 0.77),
    inset 0 -0.3125em 0.0625em 0 rgba(var(--color-light), 0.18),
    inset 0 0em 0.625em 0.1875em rgba(var(--color-dark), 0.87),
    inset 0 0.3125em 0.0625em 0 rgba(var(--color-light), 0.18),
    inset 0 -0.0625em 0.3125em 0.3125em rgba(var(--color-light), 0.5),
    0 0 1.25em 0.625em rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(6px);

  @media (max-height: 950px) {
    font-size: 90%;
  }
  @media (max-height: 850px) {
    font-size: 80%;
  }
  @media (max-height: 750px) {
    font-size: 70%;
  }
  @media (max-height: 650px) {
    font-size: 60%;
  }
  @media (max-height: 550px) {
    font-size: 50%;
  }
  @media (max-height: 350px) {
    font-size: 40%;
  }
`

const Layout = ({ children }) => (
  <StyledLayout>
    <StyledMain>{children}</StyledMain>
  </StyledLayout>
)

export default Layout
