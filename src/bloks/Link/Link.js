import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Link = (props) => {
  const {
    active,
    font,
    ref,
    size,
    text
  } = props
  var linkClass = cx ({
    'link': true,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    'link-active': active
  })
  return (
    <a href={ref} className={linkClass}>{text}</a>
  )
}

Link.propTypes = {
  active: PropTypes.bool,
  font: PropTypes.string,
  ref: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string
}

Link.defaultProps = {
  active: false,
  font: 'body',
  ref: '#',
  size: 'regular',
  text: 'Link Text'
}

export default Link