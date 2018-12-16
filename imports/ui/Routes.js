import React                 from 'react'
import {Route,
        Switch,
        Redirect}            from 'react-router'
import {BrowserRouter}       from 'react-router-dom'
import {Helmet}              from 'react-helmet'

import Home               from '/imports/ui/pages/Home'

export default () => (
  <BrowserRouter>
    <div>
      <Helmet>
      <title>Enzym - ICO Website</title>

      <meta name="description" content="Jeu mobile pour rencontrer de nouvelles personnes de façon ludique.Enzym ICO Website"/>
      <link rel="icon" sizes="32x32" type="image/x-icon" href="/images/favicon_32.png" />
      <meta name="keywords" content="game, jeu, rencontre, application, rencontrer, relations, amitié, amis, challenges, défis, amour, zym, token, ethereum" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
      </Helmet>
      <Switch>
        <Route name="home" path="/" component={Home}/>
      </Switch>
    </div>
  </BrowserRouter>
)
