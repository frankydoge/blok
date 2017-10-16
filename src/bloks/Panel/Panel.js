import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    heading
  } = props
  return (
    <Grid compact color='red'>
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
  heading: PropTypes.string
}

Panel.defaultProps = {
  heading: 'Title'
}

export default Panel