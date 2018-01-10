import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Heading } from '../../../index'
import '../../blok.css'

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
  textAlign: PropTypes.string
}

Text.defaultProps = {
  tag: 'p'
}

const Text = (props) => {
  const {
    className,
    font,
    size,
    tag,
    text,
    textAlign
  } = props
  var textClass = cx ({
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign,
    [`${className}`]: className
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={textClass}>
      {props.text}
    </ElementTag>
  )
}

export default Text