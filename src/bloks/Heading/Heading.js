import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Heading = (props) => {
  const {
    className,
    font,
    size,
    tag,
    text,
    textAlign
  } = props
  var headingClass = cx ({
    'heading': true,
    [`${className}`]: className,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign
  })
  const HeadingTag = `${props.tag}`;
  return (
    <HeadingTag className={headingClass}>
      {props.text}
    </HeadingTag>
  )
}

Heading.propTypes = {
  className: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string
}

Heading.defaultProps = {
  tag: 'h1'
}

export default Heading