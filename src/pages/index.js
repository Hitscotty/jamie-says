import Layout from "../components/layout"
import { LoremIpsum } from "lorem-ipsum"
import Message from "../components/message"
import React from "react"
import SEO from "../components/seo"
import messages from "../data/messages.json"
import styled from "styled-components"

const MessageContainer = styled.div`
  align-items: flex-start;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px auto;

  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

const earliestMessages = messages.reverse()

const Messages = () => {
  const scrollBottom = ref => ref && (ref.scrollTop = ref.scrollHeight)
  return (
    <MessageContainer ref={scrollBottom}>
      {earliestMessages.map(({ date, message }, index) => (
        <Message key={message + index} date={date}>
          {message}
        </Message>
      ))}
    </MessageContainer>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 120px;
  margin: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Jamie says" />
    <Messages />
    <StyledFooter />
  </Layout>
)

export default IndexPage
