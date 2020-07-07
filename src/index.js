import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './services/routes'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Layout from './components/layout/Layout'

export const componentColors = {
  link: "#2A6AA9",
  linkActive: "#193C5E",
  linkHover: "#253871",
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "'myriad-pro', 'sans-serif'",
    semiCondensed: {
      fontFamily: "'myriad-pro-semi-condensed', 'sans-serif'",
    },
    extended: {
      fontFamily: "'myriad-pro-semiextended', 'sans-serif'",
    }
  },
  palette: {
    componentColors: componentColors,
  },
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Routes />
          </Router>
        </Layout>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
