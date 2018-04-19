import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
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
    text,
    type
  } = props
  var linkClass = cx ({
    'link': true,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    'link-active': active,
    [`link-type-${type}`]: type,
    [`${className}`]: className
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag href={linkRef} className={linkClass}>{text}</ElementTag>
  )
}

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
  text: PropTypes.string,

  /* Set The Link Type */
  type: PropTypes.string
}

Link.defaultProps = {
  active: false,
  font: 'body',
  linkRef: '#',
  size: 'h4',
  tag: 'a'
}

export default Link