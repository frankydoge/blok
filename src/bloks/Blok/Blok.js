import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Blok = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

Blok.Content = Content
Blok.Footer = Footer
Blok.Header = Header

export default Blok