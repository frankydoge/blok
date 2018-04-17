import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from 'Components'
import '../../blok.css'

const Header = (props) => {
  const {
    children,
    color,
    link,
    linkRef,
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
  if (link) {
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
      <Grid color={color} raised={raised} className={blokHeaderClass}>
        <Grid.Row>
          <Grid.Column width={10} offset={1} >
            <Grid.Row>
              <Grid.Column width={3} className={blokHeaderLinkClass}>
                <Link size='h3' font='heading' text={props.title} linkRef={linkRef} active />
              </Grid.Column>
              <Grid.Column width={9} textAlign='right' className={blokHeaderLinkClass}>
                {linkData}
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else {
    return (
      <Grid color={color} raised={raised} className={blokHeaderClass}>
        <Grid.Row>
          <Grid.Column width={3} textAlign='middle' className={blokHeaderLinkClass}>
            <Link size='h1' font='heading' text={props.title} linkRef={linkRef} active />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {props.children}
        </Grid.Row>
      </Grid>
    )
  }
}

Header.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Create The Header Navigation */
  link: PropTypes.array,

  /* Create The Link Location */
  linkRef: PropTypes.string,

  /* Add Shadow So Header 'Floats' */
  raised: PropTypes.bool,

  /* Set The Content For The Title */
  title: PropTypes.string,

  /* Set Transparency Of Background */
  transparent: PropTypes.bool
}

Header.defaultProps = {
  color: 'white',
  linkRef: '/',
  title: 'Title'
}

export default Header