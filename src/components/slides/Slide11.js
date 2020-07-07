import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide11 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 11"
      previousSlide="Slide10"
      nextSlide="Slide12"
    >
      Hello I'm some content on slide 11
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide11
