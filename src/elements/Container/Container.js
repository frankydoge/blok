import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Container.css'

const Container = (props) => {
  const {
    textAlign,
    fluid
  } = props
  var containerClass = cx ({
    'container': true,
    [`container-${textAlign}`]: textAlign,
    'container-fluid': fluid
  })
  return (
    <div className={containerClass} >
      {props.children}
    </div>
  )
}

Container.defaultProps = {
  textAlign: 'left',
  fluid: false
}

Container.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default Container