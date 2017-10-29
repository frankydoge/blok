import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Header = (props) => {
  const {
    color,
    heading,
    link,
    raised,
    transparent
  } = props
  var blokHeaderClass = cx ({
    'blok-header': true,
    'transparent': transparent
  })
  var blokHeaderLinkClass = cx ({
    'blok-header-link': true
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
    <Grid color={color} raised={raised} className={blokHeaderClass}>
      <Grid.Row>
        <Grid.Column width={2} textAlign='middle'>
          <Heading font='heading' size='regular' text={props.heading} />
        </Grid.Column>
        <Grid.Column width={6} textAlign='right' className={blokHeaderLinkClass}>
          {linkData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Header.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.array,
  raised: PropTypes.bool
}

Header.defaultProps = {
  color: 'white',
  heading: 'Title'
}

export default Header