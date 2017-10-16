import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Container = (props) => {
  var containerClass = cx ({
    'container': true
  })
  return (
    <div className={containerClass} >
      {props.children}
    </div>
  )
}

export default Container
