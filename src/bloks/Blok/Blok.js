import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Blok = (props) => {
  const {
    className,
    tag
  } = props
  var blokClass = cx ({
    'blok': true,
    [`${className}`]: className
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={blokClass}>
      {props.children}
    </ElementTag>
  )
}

Blok.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
}

Blok.defaultProps = {
  tag: 'div'
}

Blok.Content = Content
Blok.Footer = Footer
Blok.Header = Header

export default Blok