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
    />
  )
  return (
    <Grid color={color} className={blokContentClass}>
      <Grid.Row>
        <Grid.Column width={12} textAlign='middle' className={blokContentDivideClass} >
          <Text font='heading' size='h1' text={props.title} className={blokContentTitleClass} />
          <Text font='highlight' size='h3' tag='h3' text={props.kicker} className={blokContentKickerClass} />
          {textData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Content.propTypes = {
  color: PropTypes.string,
  divide: PropTypes.bool,
  kicker: PropTypes.string,
  padded: PropTypes.bool,
  text: PropTypes.array,
  title: PropTypes.string
}

export default Content