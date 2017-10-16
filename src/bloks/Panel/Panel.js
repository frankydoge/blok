import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Column, Grid } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading
  } = props
  return (
    <Grid compact color={color}>
      <Column textAlign='middle'>
        <h1>{props.heading}</h1>
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