import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide4 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 4"
      previousSlide="Slide3"
      nextSlide="Slide5"
    >
      Hello I'm some content on slide 4
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide4
