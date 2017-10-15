import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'

const Panel = (props) => {
  const {
    position
  } = props
  var panelClass = cx ({
    'panel': true,
    [`panel-${position}`]: position
  })
  return (
    <div className={panelClass}>
      
    </div>
  )
}

Panel.defaultProps = {
  position: 'top'
}

Panel.propTypes = {
  position: PropTypes.string
}

export default Panel