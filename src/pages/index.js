import Layout from "../components/layout"
import { LoremIpsum } from "lorem-ipsum"
import Message from "../components/message"
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

const messages = Array.from({ length: 20 }, () => ({
  date: randomDate(new Date(2012, 0, 1), new Date()),
  message: lorem.generateWords(Math.ceil(Math.random() * 10)),
}))

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

const Messages = () => {
  const scrollBottom = ref => ref && (ref.scrollTop = ref.scrollHeight)
  return (
    <MessageContainer ref={scrollBottom}>
      {messages?.map(({ date, message }, index) => (
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
