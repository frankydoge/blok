import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Row = (props) => {
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

Row.defaultProps = {
  textAlign: 'left',
  fluid: false
}

Row.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default Row