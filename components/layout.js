import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <Content>
      <Main>{children}</Main>
      <Footer>
        <a href="https://github.com/andresouza/jukebox" target="blank">
          Github
        </a>
      </Footer>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  padding-top: 30px;
`

const Footer = styled.footer`
  padding: 10px 0;
`

Layout.propTypes = {
  children: PropTypes.node
}

Layout.defaultProps = {
  children: null
}

export default Layout
