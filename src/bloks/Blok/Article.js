import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from 'Components'
import '../../blok.css'

const Article = (props) => {
  const {
    children,
    className,
    color,
    divide,
    kicker,
    offset,
    padded,
    text,
    textType,
    title,
    type,
    width,
    wrapper
  } = props
  var blokContentClass = cx ({
    'blok-content': true,
    'blok-content-padded': padded
  })
  var blokContentTitleClass = cx ({
    'blok-content-title': true
  })
  var blokContentKickerClass = cx ({
    'blok-content-kicker': true
  })
  var blokContentTextClass = cx ({
    'blok-content-text': true
  })
  var blokContentDivideClass = cx ({
    'blok-content-divide': divide
  })
  const textData = text.map((data, key) =>
    <Text
      key={key}
      text={data.text}
      className={blokContentTextClass}
      font='body'
      size='text'
      tag='p'
      textAlign='left'
      type={data.type}
    />
  )
  if (title && kicker) {
    return (
      <Grid.Column width={width} offset={offset} textAlign='left' className={blokContentDivideClass} >
        <Text font='heading' type='title' size='h1' text={props.title} className={blokContentTitleClass} />
        <Text font='heading' type='sub' size='h3' tag='h2' text={props.kicker} className={blokContentKickerClass} />
        {textData}
      </Grid.Column>
    )
  } else if (title) {
    return (
      <Grid.Column width={width} offset={offset} textAlign='left' className={blokContentDivideClass} >
        <Text font='heading' type='title' size='h1' text={props.title} className={blokContentTitleClass} />
        {textData}
      </Grid.Column>
    )
  } else if (kicker) {
    return (
      <Grid.Column width={width} offset={offset} textAlign='left' className={blokContentDivideClass} >
        <Text font='heading' type='sub' size='h3' tag='h2' text={props.kicker} className={blokContentKickerClass} />
        {textData}
      </Grid.Column>
    )
  }
  else {
    return (
      <Grid.Column width={width} offset={offset} textAlign='left' className={blokContentDivideClass} >
        {textData}
      </Grid.Column>
    )
  }
}

Article.propTypes = {
  /* Add Custom Content */
  children: PropTypes.node,

  /* Add Custom Classes */
  className: PropTypes.string,

  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

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
  width: PropTypes.number,

  /* Set A Wrapper To Contain Content */
  wrapper: PropTypes.bool
}

Article.defaultProps = {
  width: 12
}

export default Article