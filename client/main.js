// import {Accounts} from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
// import i18n       from 'meteor/universe:i18n'
import React      from 'react'
import { render } from 'react-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

import App from '/src/App'


addLocaleData([...en, ...fr])

console.log(getLang())
// i18n.setLocale(getLang())
// i18n.setOptions({
//   defaultLocale: 'fr',
//   sameLocaleOnServerConnection: true,
// })

Meteor.startup(() => {
  const config = Meteor.settings.public
  render(<App locale={getLang()} />, document.getElementById('react-target'))
  // Accounts.onLogin(() => {
  //   const user = Meteor.user()
  //   if(user && user.profile && user.profile.lang) {
  //     i18n.setLocale(user.profile.lang)
  //   }
  // })
})

function getLang () {
  return (
    navigator.languages && navigator.languages[0] ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.userLanguage ||
    'en-US'
  )
}
