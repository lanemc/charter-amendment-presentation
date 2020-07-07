import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide12 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 12"
      previousSlide="Slide11"
      nextSlide="Slide13"
    >
      Hello I'm some content on slide 12
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide12
