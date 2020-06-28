import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Jukebox = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

Jukebox.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object
}

Jukebox.defaultProps = {
  pageProps: {}
}

export default Jukebox
