import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

Row.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Set The Font Type */
  font: PropTypes.string,

  /* Set The Size Of The Font */
  size: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string,

  /* Set The Alignment Of The Text */
  textAlign: PropTypes.string
}

Row.defaultProps = {
  tag: 'div'
}

const Row = (props) => {
  const {
    children,
    className,
    color,
    font,
    size,
    tag,
    textAlign
  } = props
  var rowClass = cx ({
    'row': true,
    [`${className}`]: className,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={rowClass}>
      {props.children}
    </ElementTag>
  )
}

export default Row