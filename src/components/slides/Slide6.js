import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './'

const Slide6 = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Slide 6"
      previousSlide="Slide5"
      nextSlide="Slide7"
    >
      Hello I'm some content on slide 6
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {

  },
}))

export default Slide6
