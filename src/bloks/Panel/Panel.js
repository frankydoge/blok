import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading
  } = props
  return (
    <div>
      <Grid compact color={color}>
        <Column textAlign='middle'>
          <h1>{props.heading}</h1>
        </Column>
      </Grid>
      <Grid compact color={color}>
        <Column textAlign='middle'>
          {props.children}
        </Column>
      </Grid>
    </div>
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