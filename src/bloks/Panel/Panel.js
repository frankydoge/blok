import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading,
    link,
    side
  } = props
  const linkArr = link
  const linkData = linkArr.map(rows => {
    var row = rows.map(cell =>
      <Link text={cell.text} ref={cell.ref} active={cell.active} />
    )
  })
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
  color: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.object,
  side: PropTypes.bool
}

Panel.defaultProps = {
  color: 'blue',
  heading: 'Title',
  link: "[[text: 'Link1', ref: '#'],[text: 'Link2', ref: '#']]",
  side: false
}

export default Panel