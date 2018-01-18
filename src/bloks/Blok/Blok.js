import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Article from './Article'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Blok = (props) => {
  const {
    children,
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
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string
}

Blok.defaultProps = {
  tag: 'div'
}

Blok.Article = Article
Blok.Container = Container
Blok.Footer = Footer
Blok.Header = Header
Blok.Sidebar = Sidebar

export default Blok