import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from '../../../index'
import '../../blok.css'

const Sidebar = (props) => {
  const {
    children,
    className,
    tag
  } = props
  var sidebarClass = cx ({
    'sidebar': true,
    [`${className}`]: className
  })
  const ElementTag = `${props.tag}`
  const linkData = link.map((data, key) =>
    <Link
      key={key}
      text={data.text}
      linkRef={data.linkRef}
      active={data.active}
    />
  )
  return (
    <ElementTag className={sidebarClass}>
      {linkData}
    </ElementTag>
  )
}

Sidebar.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string
}

Sidebar.defaultProps = {
  tag: 'div'
}

export default Sidebar