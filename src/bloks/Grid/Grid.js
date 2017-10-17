import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Column from './Column'
import Row from './Row'

const Grid = (props) => {
  const {
    color,
    font,
    raised,
    size,
    textAlign
  } = props
  var gridClass = cx ({
    'container': true,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
    'container-raised': raised,
    [`font-size-${size}`]: size,
    [`text-align-${textAlign}`]: textAlign
  })
  return (
    <div className={gridClass} >
      {props.children}
    </div>
  )
}

Grid.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  raised: PropTypes.bool,
  size: PropTypes.string,
  textAlign: PropTypes.string
}

Grid.Row = Row
Grid.Column = Column

export default Grid