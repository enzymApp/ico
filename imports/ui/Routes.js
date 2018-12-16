import React                 from 'react'
import {Route, Switch}       from 'react-router'
import {BrowserRouter}       from 'react-router-dom'
import {Helmet}              from 'react-helmet'

import Home               from '/imports/ui/pages/Home'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Helmet>
        <title>Enzym - ICO Website</title>
        <meta name="keywords" content="Enzym ICO Website" />
        <meta name="description"content="Enzym ICO Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </Helmet>
      <Switch>
        <Route name="home" path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default Routes
