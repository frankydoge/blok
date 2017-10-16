import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Column from './Column'
import Container from './Container'
import Row from './Row'
import '../../blok.css'

const Grid = (props) => {
  const {
    textAlign,
    fluid
  } = props
  return (
    <Container>
      <Row textAlign={props.textAlign} fluid={props.fluid} >
        {props.children}
      </Row>
    </Container>
  )
}

Grid.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default Grid