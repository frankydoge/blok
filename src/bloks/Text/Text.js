import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Heading } from '../../../index'
import '../../blok.css'

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
    [`${className}`]: className,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign
  })
  const ElementTag = `${props.tag}`;
  return (
    <ElementTag className={textClass}>
      {props.text}
    </ElementTag>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string,
  textAlign: PropTypes.string
}

Text.defaultProps = {
  tag: 'h1'
}

export default Text