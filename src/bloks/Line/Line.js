import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Line = (props) => {
  const {
    small
  } = props
  var lineClass = cx ({
    'line': true,
    'line-small': small
  })
  return (
    <div className={lineClass}></div>
  )
}

Line.propTypes = {
  small: PropTypes.bool
}

export default Line