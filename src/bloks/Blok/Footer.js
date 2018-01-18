import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from 'Components'
import '../../blok.css'

const Footer = (props) => {
  const {
    color,
    link,
    text,
    transparent
  } = props
  var blokFooterClass = cx ({
    'blok-footer': true,
    'transparent': transparent
  })
  var blokFooterLinkClass = cx ({
    'blok-footer-link': true
  })
  const linkData = link.map((data, key) =>
    <Link
      key={key}
      text={data.text}
      linkRef={data.linkRef}
      active={data.active}
      type='nav'
    />
  )
  return (
    <Grid color={color} className={blokFooterClass}>
      <Grid.Row>
        <Grid.Column width={12} textAlign='middle' className={blokFooterLinkClass}>
          {linkData}
        </Grid.Column>
        <Grid.Column width={12} textAlign='middle'>
          <Text tag='p' font='body' size='text' text={text} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Footer.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Create The Footer Navigation */
  link: PropTypes.array,

  /* Set The Content For Text Message */
  text: PropTypes.string,

  /* Set Transparency Of Background */
  transparent: PropTypes.bool
}

Footer.defaultProps = {
  color: 'white'
}

export default Footer