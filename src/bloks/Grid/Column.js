import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

Column.propTypes = {
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
  textAlign: PropTypes.string,

  /* Set The Column Width Size */
  width: PropTypes.number
}

Column.defaultProps = {
  tag: 'div'
}

const Column = (props) => {
  const {
    children,
    className,
    color,
    font,
    size,
    tag,
    textAlign,
    width
  } = props
  var columnClass = cx ({
    'column': true,
    [`${className}`]: className,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign,
    [`column-${width}`]: width
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={columnClass} >
      {props.children}
    </ElementTag>
  )
}
export default Column