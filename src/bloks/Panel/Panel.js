import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../assets//Panel.css'
import { Container } from '../../../index'

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
      <Container textAlign='middle'>
        <h1>jmart.io</h1>
      </Container>
      <Container >
        <p className='text'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </Container>
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