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
    link
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
}

Panel.propTypes = {
  className: PropTypes.string,
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