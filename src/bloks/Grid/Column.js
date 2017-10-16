import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Column = (props) => {
  var columnClass = cx ({
    'column': true
  })
  return (
    <div className={columnClass} >
      {props.children}
    </div>
  )
}

export default Column