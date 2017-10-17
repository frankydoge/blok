import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Panel = (props) => {
  const {
    className,
    color,
    heading,
    link,
    side
  } = props
  var panelClass = cx ({
    'panel-top-nav': true,
    [`${className}`]: className
  })
  const linkData = link.map((data, key) =>
    <Link
      key={key}
      text={data.text}
      linkRef={data.linkRef}
      active={data.active}
    />
  )
  if (side === 'top') {
    return (
      <Grid color={color} raised>
        <Grid.Row>
          <Grid.Column width={2} textAlign='middle'>
            <Heading font='body' size='regular' text={props.heading} />
          </Grid.Column>
          <Grid.Column width={6} textAlign='right' className={panelClass}>
            {linkData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else if (side === 'right') {
    return (
      <Grid color={color} raised>
        <Grid.Row>
          <Grid.Column width={6}>
            {props.children}
          </Grid.Column>
          <Grid.Column width={2} textAlign='middle'>
            <Heading font='body' size='regular' text={props.heading} />
            {linkData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else {
    return (
      <Grid color={color} raised>
        <Grid.Row>
          <Grid.Column width={2} textAlign='middle'>
            <Heading font='body' size='regular' text={props.heading} />
            {linkData}
          </Grid.Column>
          <Grid.Column width={6}>
            {props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.array,
  side: PropTypes.string
}

Panel.defaultProps = {
  color: 'white',
  heading: 'Title',
  link: [{text: 'Link1', ref: '#', active: 'active'}],
  side: 'top'
}

export default Panel