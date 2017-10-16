import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Column, Grid, Heading } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading,
    side
  } = props
  if (side === true) {
    return (
      <Grid compact color={color}>
        <Grid compact color={color}>
          <Column textAlign='middle'>
            <Heading font='body'>{props.heading}</Heading>
          </Column>
        </Grid>
        <Grid compact color={color}>
          <Column textAlign='right'>
            {props.children}
          </Column>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid compact color={color} hover>
        <Column textAlign='middle'>
          <Heading font='body'>{props.heading}</Heading>
        </Column>
        <Column />
        <Column textAlign='right'>
          {props.children}
        </Column>
      </Grid>
    )
  }
}

Panel.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  side: PropTypes.bool
}

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title',
  side: false
}

export default Panel