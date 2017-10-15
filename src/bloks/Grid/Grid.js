import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import GridRow from './GridRow'
import GridColumn from './GridColumn'
import '../../blok.css'

const Grid = (props) => {
  var gridClass = cx ({
    'grid': true
  })
  return (
    <div className={gridClass} >
      {props.children}
    </div>
  )
}

export {
  Grid,
  GridRow,
  GridColumn
}