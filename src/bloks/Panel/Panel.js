import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    heading,
    linkText,
    linkRef
  } = props
  return (
    <Grid compact color='red'>
      <Column textAlign='middle'>
        <h1>{props.heading}</h1>
      </Column>
      <Column />
      <Column textAlign='right'>
        <a href={props.linkRef}>{props.linkText}</a>
      </Column>
    </Grid>
  )
}

Panel.propTypes = {
  heading: PropTypes.string,
  linkText: PropTypes.string,
  linkRef: PropTypes.string
}

Panel.defaultProps = {
  heading: 'Title',
  linkText: 'Link',
  linkRef: '#'
}

export default Panel