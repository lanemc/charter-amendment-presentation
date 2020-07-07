import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide1 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 1"
      previousSlide=""
      nextSlide="Slide2"
    >
      Hello I'm some content on slide 1
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {
    height: 100,
  },
}))

export default Slide1
