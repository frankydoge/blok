import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Heading, Link } from '../../../index'
import '../../blok.css'

const PanelPage = (props) => {
  const {
    className,
    link
  } = props
  var panelPageClass = cx ({
    'panel-page': true,
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
  var offsetHeight = document.getElementById('myDiv').offsetHeight;
  console.log(offsetHeight)
  return (
    <Heading text='Hi' />
  )
}

PanelPage.propTypes = {
  className: PropTypes.string,
  link: PropTypes.array
}

export default PanelPage