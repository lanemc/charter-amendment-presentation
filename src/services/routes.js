import React from 'react'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11, 
  Slide12,
  Slide13
} from './../components/slides'
import App from '../App'
import NavBar from '../components/nav/NavBar'
import { Route, Switch, Redirect } from 'react-router-dom'

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Slide1" component={Slide1} />
        <Route exact path="/Slide2" component={Slide2} />
        <Route exact path="/Slide3" component={Slide3} />
        <Route exact path="/Slide4" component={Slide4} />
        <Route exact path="/Slide5" component={Slide5} />
        <Route exact path="/Slide6" component={Slide6} />
        <Route exact path="/Slide7" component={Slide7} />
        <Route exact path="/Slide8" component={Slide8} />
        <Route exact path="/Slide9" component={Slide9} />
        <Route exact path="/Slide10" component={Slide10} />
        <Route exact path="/Slide11" component={Slide11} />
        <Route exact path="/Slide12" component={Slide12} />
        <Route exact path="/Slide13" component={Slide13} />
      </Switch>
    </div>
  )
}