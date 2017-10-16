import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Column from './Column'

const Grid = (props) => {

  // Props
  const {
    color,
    compact,
    fluid,
    hover,
    textAlign
  } = props

  // Class Name for Container
  var containerClass = cx ({
    'container': true,
    [`color-background-${color}`]: color,
    'container-compact': compact,
    'hover': hover
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
  hover: PropTypes.bool,
  textAlign: PropTypes.string
}

Grid.defaultProps = {
  compact: false,
  fluid: false,
  hover: false
}

Grid.Column = Column

export default Grid