import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Heading } from '../../../index'
import '../../blok.css'

/* Need to add ability to style words inline */

const Text = (props) => {
  const {
    className,
    font,
    size,
    tag,
    text,
    textAlign,
    type
  } = props
  var textClass = cx ({
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign,
    [`text-type-${type}`]: type,
    [`${className}`]: className
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={textClass}>
      {props.text}
    </ElementTag>
  )
}

Text.propTypes = {
  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Font Type */
  font: PropTypes.string,

  /* Set The Size Of The Font */
  size: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string,

  /* Set The Content For Text Message */
  text: PropTypes.string,

  /* Set The Alignment Of The Text */
  textAlign: PropTypes.string,

  /* Set The Text Type */
  type: PropTypes.string
}

Text.defaultProps = {
  tag: 'p',
  type: 'paragraph'
}

export default Text