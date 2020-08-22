import React from "react"
import styled from "styled-components"

export const StyledMessage = styled.div`
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 25%;
  margin-left: 5px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  opacity: 0.75;

  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding: 16px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;

  @media (max-height: 950px) {
    font-size: 90%;
  }

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

const StyledSpan = styled.span`
  margin: 0 auto;
  font-size: 0.7em;
  color: #eee;
`

const Time = ({ date }) => {
  if (!date) {
    return null
  }

  const d = new Date(date)
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(d)
  const mo = new Intl.DateTimeFormat("en-US", { month: "short" }).format(d)
  const da = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(d)
  const ti = new Intl.DateTimeFormat("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  }).format(d)

  return (
    <StyledSpan>
      {wd}, {mo} {da}, {ti}
    </StyledSpan>
  )
}

export const Message = ({ date, children }) => {
  return (
    <>
      <StyledMessage>{children}</StyledMessage>
      <Time date={date} />
    </>
  )
}

export default Message
