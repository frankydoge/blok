import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    active,
    color,
    heading,
    link,
    ref,
    side,
    text
  } = props
  const linkData = link.map((data, key) =>
    <Link
      key={key}
      text={data.text}
      ref={data.ref}
      active={data.active}
    />
  )
  if (side === true) {
    return (
      <Grid compact color={color}>
        <Grid.Column>
          <Grid compact color={color}>
            <Grid.Column textAlign='middle'>
              <Heading font='body'>{props.heading}</Heading>
            </Grid.Column>
          </Grid>
          <Grid compact color={color}>
            <Grid.Column textAlign='right'>
              {linkData}
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          {props.children}
        </Grid.Column>
      </Grid>
    )
  } else {
    return (
      <Grid compact color={color} hover>
        <Grid.Column textAlign='middle'>
          <Heading font='body'>{props.heading}</Heading>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column textAlign='right'>
          {linkData}
        </Grid.Column>
      </Grid>
    )
  }
}

Panel.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.array,
  side: PropTypes.bool,
  text: PropTypes.string,
  ref: PropTypes.string
}

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title',
  link: "[[text: 'Link1', ref: '#'],[text: 'Link2', ref: '#']]",
  side: false
}

export default Panel