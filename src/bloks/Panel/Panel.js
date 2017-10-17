import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    color,
    heading,
    link
  } = props
  const linkData = link.map((data, key) =>
    <Link
      key={key}
      text={data.text}
      linkRef={data.linkRef}
      active={data.active}
    />
  )
  return (
    <Grid color={color}>
      <Grid.Row>
        <Grid.Column width={2} textAlign='middle'>
          <Heading font='body' text={props.heading} />
        </Grid.Column>
        <Grid.Column width={6} textAlign='right'>
          {linkData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Panel.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.array
}

Panel.defaultProps = {
  color: 'white',
  heading: 'Title',
  link: [{text: 'Link1', ref: '#', active: 'active'}]
}

export default Panel