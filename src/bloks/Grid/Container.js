import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Container = (props) => {
  const {
    compact
  } = props
  var containerClass = cx ({
    'container': true,
    'container-compact': compact
  })
  return (
    <div className={containerClass} >
      {props.children}
    </div>
  )
}

Container.defaultProps = {
  compact: false
}

Container.propTypes = {
  compact: PropTypes.bool
}

export default Container
