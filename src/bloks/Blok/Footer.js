import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Line, Link, Text } from '../../../index'
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
    />
  )
  return (
    <Grid color={color} className={blokFooterClass}>
      <Grid.Row>
        <Grid.Column width={8} textAlign='middle' className={blokFooterLinkClass}>
          {linkData}
        </Grid.Column>
        <Grid.Column width={8} textAlign='middle'>
          <Text tag='p' font='body' size='text' text={text} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Footer.propTypes = {
  color: PropTypes.string,
  link: PropTypes.array,
  text: PropTypes.string,
  transparent: PropTypes.bool
}

Footer.defaultProps = {
  color: 'white'
}

export default Footer