import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Column, Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading,
    link,
    side
  } = props
  const linkData = link
  const linkItems = linkData.map((linkData) =>
    <Link ref={link.ref} text={link.text} key={id} active={link.active} />
  )
  if (side === true) {
    return (
      <Grid compact color={color}>
        <Column>
          <Grid compact color={color}>
            <Column textAlign='middle'>
              <Heading font='body'>{props.heading}</Heading>
            </Column>
          </Grid>
          <Grid compact color={color}>
            <Column textAlign='right'>
              {linkItems}
            </Column>
          </Grid>
        </Column>
        <Column>
          {props.children}
        </Column>
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
          {linkItems}
        </Column>
      </Grid>
    )
  }
}

Panel.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.object,
  side: PropTypes.bool
}

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title',
  link: "[{text: 'Link', ref: '#'}]",
  side: false
}

export default Panel