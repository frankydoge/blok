import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const Header = (props) => {
  const {
    color,
    heading,
    link
  } = props
  var blokHeaderClass = cx ({
    [`blok-header`]: true
  })
  var blokHeaderLinkClass = cx ({
    [`blok-header-link`]: true
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
    <Grid color={color} raised className={blokHeaderClass}>
      <Grid.Row>
        <Grid.Column width={2} textAlign='middle'>
          <Heading font='body' size='regular' text={props.heading} />
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
  link: PropTypes.array
}

Header.defaultProps = {
  color: 'white',
  heading: 'Title',
  link: [{text: 'Link1', linkRef: '#', active: 'active'}]
}

export default Header