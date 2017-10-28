import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Row = (props) => {
  const {
    className,
    color,
    font,
    size,
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
  return (
    <div className={rowClass}>
      {props.children}
    </div>
  )
}

Row.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  textAlign: PropTypes.string
}

export default Row