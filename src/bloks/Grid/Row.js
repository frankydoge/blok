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

Row.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
  textAlign: PropTypes.string
}

Row.defaultProps = {
  tag: 'div'
}

export default Row