import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide10 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 10"
      previousSlide="Slide9"
      nextSlide="Slide11"
    >
      Hello I'm some content on slide 10
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide10
