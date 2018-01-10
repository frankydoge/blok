import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Column from './Column'
import Row from './Row'

const Grid = (props) => {
  const {
    children,
    className,
    color,
    font,
    raised,
    size,
    tag,
    textAlign
  } = props
  var gridClass = cx ({
    'container': true,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    'container-raised': raised,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign,
    [`${className}`]: className
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={gridClass} >
      {props.children}
    </ElementTag>
  )
}

Grid.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Set The Font Type */
  font: PropTypes.string,

  /* Add Shadow So Grid 'Floats' */
  raised: PropTypes.bool,

  /* Set The Size Of The Font */
  size: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string,

  /* Set The Alignment Of The Text */
  textAlign: PropTypes.string
}

Grid.defaultProps = {
  tag: 'div'
}

Grid.Row = Row
Grid.Column = Column

export default Grid