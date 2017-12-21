import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Link = (props) => {
  const {
    active,
    className,
    color,
    font,
    linkRef,
    size,
    tag,
    text
  } = props
  var linkClass = cx ({
    'link': true,
    [`${className}`]: className,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    'link-active': active
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag href={linkRef} className={linkClass}>{text}</ElementTag>
  )
}

Link.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  font: PropTypes.string,
  linkRef: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string
}

Link.defaultProps = {
  active: false,
  font: 'body',
  linkRef: '#',
  size: 'h4',
  tag: 'a'
}

export default Link