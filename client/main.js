// import {Accounts} from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import React      from 'react'
import { render } from 'react-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

import App from '/src/App'
import locales from '/src/modules/intl/loadLocales'
import { guessBrowserLang } from '/src/modules/intl/helpers'


addLocaleData([...en, ...fr])

console.log(guessBrowserLang(locales))

Meteor.startup(() => {
  render(<App locale={guessBrowserLang(locales)} />, document.getElementById('react-target'))
  // Accounts.onLogin(() => {
  //   const user = Meteor.user()
  //   if(user && user.profile && user.profile.lang) {
  //     i18n.setLocale(user.profile.lang)
  //   }
  // })
})
