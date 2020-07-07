import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide9 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 9"
      previousSlide="Slide8"
      nextSlide="Slide10"
    >
      Hello I'm some content on slide 9
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide9
