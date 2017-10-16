import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Column from './Column'
import Container from './Container'
import Row from './Row'
import '../../blok.css'

const Grid = (props) => {

  // Props
  const {
    color,
    compact,
    fluid,
    textAlign
  } = props

  // Class Name for Container
  var containerClass = cx ({
    'container': true,
    [`color-background-${color}`]: color,
    'container-compact': compact
  })

  // Class Name for Row
  var rowClass = cx ({
    'row': true,
    [`text-align-${textAlign}`]: textAlign,
    'display-fluid': fluid
  })

  return (
    <div className={containerClass} >
      <div className={rowClass} >
        {props.children}
      </div>
    </div>
  )
}

Grid.propTypes = {
  compact: PropTypes.bool,
  fluid: PropTypes.bool,
  textAlign: PropTypes.string
}

Grid.defaultProps = {
  compact: false,
  fluid: false,
  textAlign: 'left'
}

export default Grid