import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Link = (props) => {
  const {
    active,
    color,
    font,
    linkRef,
    size,
    text
  } = props
  var linkClass = cx ({
    'link': true,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    'link-active': active
  })
  return (
    <a href={linkRef} className={linkClass}>{text}</a>
  )
}

Link.propTypes = {
  active: PropTypes.bool,
  font: PropTypes.string,
  linkRef: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string
}

Link.defaultProps = {
  active: false,
  font: 'body',
  linkRef: '#',
  size: 'small',
  text: 'Link Text'
}

export default Link