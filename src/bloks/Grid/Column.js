import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Column = (props) => {
  const {
    color,
    textAlign
  } = props
  var columnClass = cx ({
    'column': true,
    [`color-background-${color}`]: color,
    [`text-align-${textAlign}`]: textAlign
  })
  return (
    <div className={columnClass} >
      {props.children}
    </div>
  )
}

Column.propTypes = {
  color: PropTypes.string,
  textAlign: PropTypes.string
}

Grid.defaultProps = {
  textAlign: 'left'
}

export default Column