import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Column = (props) => {
  const {
    color
  } = props
  var columnClass = cx ({
    'column': true,
    [`color-background-${color}`]: color
  })
  return (
    <div className={columnClass} >
      {props.children}
    </div>
  )
}

Column.defaultProps = {
  color: 'blue'
}

Column.propTypes = {
  color: PropTypes.string
}

export default Column