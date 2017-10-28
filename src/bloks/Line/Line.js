import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Line = (props) => {
  var lineClass = cx ({
    'line': true
  })
  return (
    <div className={lineClass}></div>
  )
}

export default Line