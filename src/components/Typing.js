import styled, { keyframes } from "styled-components"

import React from "react"

const cycleOne = keyframes`
  0% {
    background: rgba(150, 150, 150, 0.4);
  }
  33.333% {
    background: rgba(150, 150, 150, 1);
  }
  66.6667% {
    background: rgba(150, 150, 150, 0.4);
  }
  100% {
    background: rgba(150, 150, 150, 0.4);
  }
`

const cycleTwo = keyframes`
  0% {
    background: rgba(150, 150, 150, 0.4);
  }
  33.333% {
    background: rgba(150, 150, 150, 0.4);
  }
  66.6667% {
    background: rgba(150, 150, 150, 1);
  }
  100% {
    background: rgba(150, 150, 150, 0.4);
  }
`

const cycleThree = keyframes`
  0% {
    background: rgba(150, 150, 150, 0.4);
  }
  33.333% {
    background: rgba(150, 150, 150, 0.4);
  }
  66.6667% {
    background: rgba(150, 150, 150, 0.4);
  }
  100% {
    background: rgba(150, 150, 150, 1);
  }
`
const Bubble = styled.div`
  height: 72px;
  width: 46px;
  background: #e5e5e5;
  position: absolute;
  bottom: 15px;
  transform: translate(-50%, -50%);
`

const Tail = styled.div`
  height: 25px;
  width: 25px;
  background: #e5e5e5;
  position: absolute;
  left: -40px;
  bottom: 2px;
  border-radius: 50%;
  &:before {
    height: 12px;
    width: 12px;
    background: #e5e5e5;
    content: "";
    display: block;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    bottom: -8px;
  }
`

const getWebKitAnimation = dot => {
  switch (dot) {
    case "one":
      return cycleOne
    case "two":
      return cycleTwo
    case "three":
      return cycleThree
    default:
      return ""
  }
}

const Loading = styled.div`
  position: absolute;
  z-index: 10;
  width: 67px;
  left: -11px;
  top: 27px;
`

const Dot = styled.div`
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #c1c1c1;
  display: block;
  float: left;
  margin: ${props => (props.dot === "one" ? "0;" : "0 0 0 8px")};
  animation: ${props => getWebKitAnimation(props.dot)} 1s ease-in-out infinite;
  -webkit-animation-direction: normal;
`

export const Typing = () => (
  <Bubble>
    <Loading>
      <Dot dot="one" />
      <Dot dot="two" />
      <Dot dot="three" />
    </Loading>
    <Tail />
  </Bubble>
)

export default Typing
