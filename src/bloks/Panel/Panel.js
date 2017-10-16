import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Column, Grid, Heading } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading
  } = props
  return (
    <Grid compact color={color} hover>
      <Column textAlign='middle'>
        <Heading>{props.heading}</Heading>
      </Column>
      <Column />
      <Column textAlign='right'>
        {props.children}
      </Column>
    </Grid>
  )
}

Panel.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string
}

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title'
}

export default Panel