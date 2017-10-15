import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Row from './Row'
import Column from './Column'
import '../../assets/Grid.css'

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

export default Grid