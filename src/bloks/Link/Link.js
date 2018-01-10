import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

Link.propTypes = {
  /* Set For Active Link */
  active: PropTypes.bool,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Font Type */
  font: PropTypes.string,

  /* Create The Link Location */
  linkRef: PropTypes.string,

  /* Set The Size Of The Font */
  size: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string,

  /* Set The Content For Text Message */
  text: PropTypes.string
}

Link.defaultProps = {
  active: false,
  font: 'body',
  linkRef: '#',
  size: 'h4',
  tag: 'a'
}

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

export default Link