import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import PanelPage from './PanelPage'
import '../../blok.css'

const Panel = (props) => {
  const {
    className,
    color,
    heading,
    link,
    side
  } = props
  var panelTopClass = cx ({
    [`${className}`]: className,
    [`panel-side-${side}`]: side
  })
  var panelSideClass = cx ({
    [`${className}`]: className,
    [`panel-side-${side}`]: side
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
      <Grid color={color} raised id='panelPageId'>
        <Grid.Row>
          <Grid.Column width={2} textAlign='middle'>
            <Heading font='body' size='regular' text={props.heading} />
          </Grid.Column>
          <Grid.Column width={6} textAlign='right' className={panelTopClass}>
            {linkData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else if (side === 'right') {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={7}>
            {props.children}
          </Grid.Column>
          <Grid.Column width={1} textAlign='middle' color={color} className={panelSideClass}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Heading font='body' size='regular' text={props.heading} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8} textAlign='left'>
                  {linkData}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={1} textAlign='middle' color={color} className={panelSideClass}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={7}>
                  <Heading font='body' size='regular' text={props.heading} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8} textAlign='right'>
                  {linkData}
                </Grid.Column>
              </Grid.Row>
            </Grid>
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

Panel.Page = PanelPage

export default Panel