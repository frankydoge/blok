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
    padded,
    text,
    title
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
  var blokContentDivideClass = cx ({
    'blok-content-divide': divide
  })
  const textData = text.map((data, key) =>
    <Text
      key={key}
      text={data.text}
      font='body'
      size='text'
      tag='p'
      textAlign='left'
    />
  )
  return (
    <Grid color={color} className={blokContentClass}>
      <Grid.Row>
        <Grid.Column width={8} offset={2} textAlign='middle' className={blokContentDivideClass} >
          <Text font='heading' size='h1' textAlign='left' text={props.title} className={blokContentTitleClass} />
          <Text font='secondary' size='h3' tag='h2' textAlign='left' text={props.kicker} className={blokContentKickerClass} />
          {textData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Content.propTypes = {
  /* Set The Color Scheme - REPLACE WITH THEME */
  color: PropTypes.string,

  /* Add A Divider Line */
  divide: PropTypes.bool,

  /* Set Content For Kicker Message */
  kicker: PropTypes.string,

  /* Add Padding To Top */
  padded: PropTypes.bool,

  /* Set The Content For Text Message */
  text: PropTypes.array,

  /* Set The Content For The Title */
  title: PropTypes.string
}

export default Content