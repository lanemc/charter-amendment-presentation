import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide2 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 2"
      previousSlide="Slide1"
      nextSlide="Slide3"
    >
      Hello I'm some content on slide 2
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide2
