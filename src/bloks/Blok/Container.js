import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid } from 'Components'
import '../../blok.css'

const Container = (props) => {
  const {
    children,
    className,
    color,
    padded,
    width
  } = props
  var blokContainerClass = cx ({
    'blok-container-padded': padded,
    [`${className}`]: className
  })
  return (
    <Grid color={color} className={blokContainerClass}>
      <Grid.Row>
        <Grid.Column width={width} >
          {props.children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Container.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Add Padding To Top */
  padded: PropTypes.bool,

  /* Set The Width Of The Column */
  width: PropTypes.number
}

Container.defaultProps = {
  width: 12
}

export default Container