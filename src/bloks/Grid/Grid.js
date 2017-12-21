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
    [`${className}`]: className,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    'container-raised': raised,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign
  })
  const ElementTag = `${props.tag}`
  return (
    <ElementTag className={gridClass} >
      {props.children}
    </ElementTag>
  )
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  raised: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  textAlign: PropTypes.string
}

Grid.defaultProps = {
  tag: 'div'
}

Grid.Row = Row
Grid.Column = Column

export default Grid