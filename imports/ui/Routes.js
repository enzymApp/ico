import React                 from 'react'
import {Route,
        Switch,
        Redirect}            from 'react-router'
import {BrowserRouter}       from 'react-router-dom'

import Home               from '/imports/ui/pages/Home'

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route name="home" path="/" component={Home}/>
      </Switch>
    </div>
  </BrowserRouter>
)
