import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../blok.css'
import Header from './Header'

const Blok = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

Blok.Header = Header

export default Blok