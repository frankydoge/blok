import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Heading } from '../../../index'
import '../../blok.css'

const Text = (props) => {
  const {
    className,
    text
  } = props
  var textClass = cx ({
    'text': true,
    [`${className}`]: className
  })
  return (
    <Heading font='body' size='text' textAlign='middle' text={props.text} className={textClass} />
  )
}

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default Text