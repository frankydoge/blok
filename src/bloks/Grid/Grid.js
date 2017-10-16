import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Column from './Column'
import Container from './Container'
import Row from './Row'
import '../../blok.css'

const Grid = (props) => {
  const {
    compact,
    fluid,
    textAlign
  } = props
  return (
    <Container compact={compact} >
      <Row textAlign={props.textAlign} fluid={props.fluid} >
        {props.children}
      </Row>
    </Container>
  )
}

Grid.propTypes = {
  compact: PropTypes.bool,
  fluid: PropTypes.bool,
  textAlign: PropTypes.string
}

export default Grid