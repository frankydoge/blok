import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const GridColumn = (props) => {
  const {
    textAlign,
    fluid
  } = props
  var columnClass = cx ({
    'row': true,
    [`text-align-${textAlign}`]: textAlign,
    'display-fluid': fluid
  })
  return (
    <div className={columnClass} >
      {props.children}
    </div>
  )
}

GridColumn.defaultProps = {
  textAlign: 'left',
  fluid: false
}

GridColumn.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default GridColumn