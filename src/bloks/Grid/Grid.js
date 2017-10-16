import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import GridColumn from './GridColumn'
import GridRow from './GridRow'
import '../../blok.css'

const Grid = (props) => {
  Row: GridRow
  Column: GridColumn
  const {
    textAlign,
    fluid
  } = props
  var gridClass = cx ({
    'grid': true
  })
  var rowClass = cx ({
    'row': true,
    [`text-align-${textAlign}`]: textAlign,
    'display-fluid': fluid
  })
  var columnClass = cx ({
    'grid': true
  })
  return (
    <div className={gridClass} >
      {props.children}
    </div>
  )
}

Grid.defaultProps = {
  textAlign: 'left',
  fluid: false
}

Grid.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default Grid
