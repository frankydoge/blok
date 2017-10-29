import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Line, Link, Text } from '../../../index'
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
  const textData = description.map((data, key) =>
    <Text
      key={key}
      text={data.text}
      className={blokContentDescClass}
    />
  )
  return (
    <Grid color={color} className={blokContentClass}>
      <Grid.Row>
        <Grid.Column width={8} textAlign='middle'>
          <Heading font='heading' size='huge' text={props.heading} className={blokContentHeadingClass} />
          <Heading font='fancy' size='small' text={props.kicker} className={blokContentKickerClass} />
          <Line small />
          {textData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Content.propTypes = {
  color: PropTypes.string,
  description: PropTypes.array,
  heading: PropTypes.string,
  kicker: PropTypes.string,
  padded: PropTypes.bool
}

export default Content