import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from '../../../index'
import '../../blok.css'

const Header = (props) => {
  const {
    color,
    link,
    raised,
    title,
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
          <Text font='heading' size='h3' text={props.title} />
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
  link: PropTypes.array,
  raised: PropTypes.bool,
  title: PropTypes.string,
  transparent: PropTypes.bool
}

Header.defaultProps = {
  color: 'white',
  title: 'Title'
}

export default Header