import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide13 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 13"
      previousSlide="Slide12"
      home="TitleSlide"
    >
      Hello I'm some content on slide 13
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide13
