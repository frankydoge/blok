import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from '../../../index'
import '../../blok.css'

const Content = (props) => {
  const {
    color,
    divide,
    kicker,
    offset,
    padded,
    text,
    title,
    type
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
  const os = 0
  if (offset) {
    const os = 3
  }
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
      <Grid color={color} className={blokContentClass}>
        <Grid.Row>
          <Grid.Column width={6} offset={os} textAlign='left' className={blokContentDivideClass} >
            <Text font='heading' size='h1' text={props.title} className={blokContentTitleClass} />
            <Text font='heading' size='h3' tag='h2' text={props.kicker} className={blokContentKickerClass} />
            {textData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else if (title) {
    return (
      <Grid color={color} className={blokContentClass}>
        <Grid.Row>
          <Grid.Column width={6} offset={os} textAlign='left' className={blokContentDivideClass} >
            <Text font='heading' size='h1' text={props.title} className={blokContentTitleClass} />
            {textData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  } else if (kicker) {
    return (
      <Grid color={color} className={blokContentClass}>
        <Grid.Row>
          <Grid.Column width={6} offset={os} textAlign='left' className={blokContentDivideClass} >
            <Text font='heading' size='h3' tag='h2' text={props.kicker} className={blokContentKickerClass} />
            {textData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  else {
    return (
      <Grid color={color} className={blokContentClass}>
        <Grid.Row>
          <Grid.Column width={6} offset={os} textAlign='left' className={blokContentDivideClass} >
            {textData}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Content.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Add A Divider Line */
  divide: PropTypes.bool,

  /* Set Content For Kicker Message */
  kicker: PropTypes.string,

  /* Set if offset is needed */
  offset: PropTypes.bool,

  /* Add Padding To Top */
  padded: PropTypes.bool,

  /* Set The Content For Text Message */
  text: PropTypes.array,

  /* Set The Content For The Title */
  title: PropTypes.string,

  /* Set The Text Type */
  type: PropTypes.string
}

Content.defaultProps = {
  type: 'paragraph'
}

export default Content