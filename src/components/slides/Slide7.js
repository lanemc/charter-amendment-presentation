import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide7 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 7"
      previousSlide="Slide6"
      nextSlide="Slide8"
    >
      Hello I'm some content on slide 7
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide7
