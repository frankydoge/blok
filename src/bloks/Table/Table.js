import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from 'Components'
import '../../blok.css'

const Table = (props) => {
  const {
    children,
    className,
    tag,
    text,
    type
  } = props
  if (tag == 'table') {
    var tableClass = cx ({
      'table': true,
      [`${className}`]: className
    })
  } else if (tag == 'tr') {
    var tableClass = cx ({
      'table-row': true,
      [`${className}`]: className
    })
  } else if (tag == 'th') {
    var tableClass = cx ({
      'table-header': true,
      [`${className}`]: className
    })
  } else {
    var tableClass = cx ({
      'table-cell': true,
      [`${className}`]: className
    })
  }
  const ElementTag = `${props.tag}`
  if (text) {
    const textData = text.map((data, key) =>
      <Text
        key={key}
        tag={data.tag}
        text={data.text}
        className={data.className}
      />
    )
    return (
      <ElementTag className={tableClass} >{textData}</ElementTag>
    )
  } else {
    return (
      <ElementTag className={tableClass} >{props.children}</ElementTag>
    )
  }
}

Table.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Tag For The Element */
  tag: PropTypes.string,

  /* Set The Content For Text Message */
  text: PropTypes.array,

  /* Set The Text Type */
  type: PropTypes.string
}

Table.defaultProps = {
  tag: 'tr',
  type: 'paragraph'
}

export default Table