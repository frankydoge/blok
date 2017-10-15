import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Column = (props) => {
  const {
    textAlign,
    fluid
  } = props
  var containerClass = cx ({
    'row': true,
    [`text-align-${textAlign}`]: textAlign,
    'display-fluid': fluid
  })
  return (
    <div className={containerClass} >
      {props.children}
    </div>
  )
}

Column.defaultProps = {
  textAlign: 'left',
  fluid: false
}

Column.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default Column