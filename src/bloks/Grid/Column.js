import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Column = (props) => {
  const {
    color,
    font,
    textAlign
  } = props
  var columnClass = cx ({
    'column': true,
    [`color-background-${color}`]: color,
    [`font-family-${font}`]: font,
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
  font: PropTypes.string,
  textAlign: PropTypes.string
}

Column.defaultProps = {
  font: 'body'
}

export default Column