import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const GridRow = (props) => {
  const {
    textAlign,
    fluid
  } = props
  var rowClass = cx ({
    'row': true,
    [`text-align-${textAlign}`]: textAlign,
    'display-fluid': fluid
  })
  return (
    <div className={rowClass} >
      {props.children}
    </div>
  )
}

GridRow.defaultProps = {
  textAlign: 'left',
  fluid: false
}

GridRow.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default GridRow