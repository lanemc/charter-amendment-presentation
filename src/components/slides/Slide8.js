import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide8 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 8"
      previousSlide="Slide7"
      nextSlide="Slide9"
    >
      Hello I'm some content on slide 8
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide8
