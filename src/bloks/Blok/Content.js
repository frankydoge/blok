import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Line, Link } from '../../../index'
import '../../blok.css'

const Content = (props) => {
  const {
    color,
    description,
    heading,
    kicker,
    padded
  } = props
  var blokContentClass = cx ({
    'blok-content': true,
    'blok-content-padded': padded
  })
  var blokContentHeadingClass = cx ({
    'blok-content-heading': true
  })
  var blokContentKickerClass = cx ({
    'blok-content-kicker': true
  })
  var blokContentDescClass = cx ({
    'blok-content-description': true
  })
  return (
    <Grid color={color} className={blokContentClass}>
      <Grid.Row>
        <Grid.Column width={1} />
        <Grid.Column width={6} textAlign='middle'>
          <Heading font='body' size='huge' text={props.heading} className={blokContentHeadingClass} />
          <Heading font='body' size='regular' text={props.kicker} className={blokContentKickerClass} />
          <Heading font='body' size='small' textAlign='left' text={props.description} className={blokContentDescClass} />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  )
}

Content.propTypes = {
  color: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  kicker: PropTypes.string,
  padded: PropTypes.bool
}

export default Content