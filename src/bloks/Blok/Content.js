import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from '../../../index'
import '../../blok.css'

const Content = (props) => {
  const {
    children,
    className,
    color,
    container,
    divide,
    kicker,
    offset,
    padded,
    text,
    textType,
    title,
    type,
    width
  } = props
  var blokContentClass = cx ({
    'blok-content': true,
    'blok-content-padded': padded
  })
  var blokContentTextClass = cx ({
    [`${className}`]: className
  })
  var blokContentDivideClass = cx ({
    'blok-content-divide': divide
  })
  if (type == 'article') {
    if (textType == 'title') {
      const textData = text.map((data, key) => {
        <Text
          key={key}
          text={data.text}
          className={blokContentTextClass}
          font='heading'
          size='h1'
          tag='h1'
          textAlign='left'
          type={data.textType}
        />
      })
    } else if (textType == 'sub') {
      const textData = text.map((data, key) => {
        <Text
          key={key}
          text={data.text}
          className={blokContentTextClass}
          font='heading'
          size='h3'
          tag='h2'
          textAlign='left'
          type={data.textType}
        />
      })
    } else {
      const textData = text.map((data, key) => {
        <Text
          key={key}
          text={data.text}
          className={blokContentTextClass}
          font='body'
          size='text'
          tag='p'
          textAlign='left'
          type={data.textType}
        />
      })
    }
  }
  if (container) {
    return (
      <Grid color={color} className={blokContentClass}>
        <Grid.Row>
          {props.children}
        </Grid.Row>
      </Grid>
    )
  } else {
    return (
      <Grid.Column width={width} offset={offset} textAlign='left' className={blokContentDivideClass} >
        {textData}
      </Grid.Column>
    )
  }
}

Content.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Add A Container to Contain Content */
  container: PropTypes.bool,

  /* Add A Divider Line */
  divide: PropTypes.bool,

  /* Set Content For Kicker Message */
  kicker: PropTypes.string,

  /* Set if offset is needed */
  offset: PropTypes.number,

  /* Add Padding To Top */
  padded: PropTypes.bool,

  /* Set The Content For Text Message */
  text: PropTypes.array,

  /* Set The Text Type */
  textType: PropTypes.string,

  /* Set The Content For The Title */
  title: PropTypes.string,

  /* Set The Content Type */
  type: PropTypes.string,

  /* Set The Width Of The Column */
  width: PropTypes.number
}

Content.defaultProps = {
  textType: 'paragraph'
}

export default Content