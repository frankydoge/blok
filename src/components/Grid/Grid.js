import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../assets/Grid.css'

const Grid = (props) => {
  const {
    column,
    color,
    row
  } = props
  var gridClass = cx ({
    'grid': true,
    [`grid-col-${column}`]: column,
    [`grid-${color}`]: color,
    'row': row
  })
  return (
    <div className={gridClass}>
      {props.children}
    </div>
  )
}

Grid.defaultProps = {
  column: 0,
  row: false
}

Grid.propTypes = {
  column: PropTypes.number,
  row: PropTypes.bool
}

export default Grid