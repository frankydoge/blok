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
}

PanelPage.propTypes = {
  className: PropTypes.string,
  link: PropTypes.array
}

PanelPage.defaultProps = {
  link: [{text: 'Link1', ref: '#', active: 'active'}]
}

export default PanelPage