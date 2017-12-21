import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Column = (props) => {
  const {
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

Column.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
  textAlign: PropTypes.string,
  width: PropTypes.number
}


Column.defaultProps = {
  tag: 'div'
}
export default Column