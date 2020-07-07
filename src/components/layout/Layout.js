import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { TopRight, BottomLeft, Logo } from '../../assets/images'

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.presentationFrame}>
      <Grid container justify="flex-end" alignItems="flex-start">
        <img className={classes.topRightImage} src={TopRight} alt="presentation top right frame" />
      </Grid>
        {children}
      <Grid className={classes.bottomLeftGrid} container justify="space-between" alignItems="flex-end">
        <img className={classes.bottomLeftImage} src={BottomLeft} alt="presentation bottom left frame" />
        <img className={classes.logo} src={Logo} alt="city of minneapolis logo" />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  bottomLeftGrid: {
    bottom: 0,
    position: 'absolute',
  },
  bottomLeftImage: {
    width: '12%',
  },
  logo: {
    marginBottom: '.5em',
    marginRight: 4,
    width: '18%',
  },
  presentationFrame: {
    height: 'calc(100vh)',
  },
  topRightImage: {
    width: '12%',
  },
}))

export default Layout
