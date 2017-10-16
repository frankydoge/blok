import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Column } from '../../../index'
import '../../blok.css'

const Link = (props) => {
  const {
    heading
  } = props
  return (
    <a href='#' className='active'>Blok</a>
  )
}

Link.propTypes = {
  heading: PropTypes.string
}

Link.defaultProps = {
  heading: 'Title'
}

export default Link