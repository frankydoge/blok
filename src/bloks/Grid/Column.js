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
    textAlign,
    width
  } = props
  var columnClass = cx ({
    'column': true,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign,
    [`column-${width}`]: width
  })
  return (
    <div className={columnClass} >
      {props.children}
    </div>
  )
}

Column.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  textAlign: PropTypes.string,
  width: PropTypes.number
}

export default Column