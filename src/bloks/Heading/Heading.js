import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Heading = (props) => {
  const {
    font,
    size,
    tag
  } = props
  var headingClass = cx ({
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size
  })
  const HeadingTag = `${props.tag}`;
  return (
    <HeadingTag className={headingClass}>
      {props.children}
    </HeadingTag>
  )
}

Heading.propTypes = {
  font: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string
}

Heading.defaultProps = {
  font: 'heading',
  size: 'large',
  tag: 'h1'
}

export default Heading