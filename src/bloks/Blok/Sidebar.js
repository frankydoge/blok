import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Blok, Grid, Link, Text } from 'Components'
import '../../blok.css'

const Sidebar = (props) => {
  const {
    children,
    className,
    link,
    offset,
    tag,
    title,
    type,
    width
  } = props
  var blokSidebarClass = cx ({
    'blok-sidebar': true,
    [`${className}`]: className
  })
  var blokSidebarTitleClass = cx ({
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
      type={data.type}
      size='text'
      className='blok-sidebar-link'
    />
  )
  return (
    <Grid.Column width={width} offset={offset} className={blokSidebarClass} >
      <Blok.Container>
        <Grid.Column width={12}>
          <Text font='heading' type='title-small' size='h4' tag='h2' text={props.title} />
        </Grid.Column>
        <Grid.Column width={12}>
          {linkData}
        </Grid.Column>
      </Blok.Container>
    </Grid.Column>
  )
}

Sidebar.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Create The Footer Navigation */
  link: PropTypes.array,

  /* Set if offset is needed */
  offset: PropTypes.number,

  /* Set The Tag For The Element */
  tag: PropTypes.string,

  /* Set The Content For The Title */
  title: PropTypes.string,

  /* Set The Link Type */
  type: PropTypes.string,

  /* Set The Width Of The Column */
  width: PropTypes.number
}

Sidebar.defaultProps = {
  offset: 2,
  tag: 'div',
  title: 'Website',
  width: 2
}

export default Sidebar