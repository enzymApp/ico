// import {Accounts} from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import i18n       from 'meteor/universe:i18n'
import React      from 'react'
import { render } from 'react-dom'
import App from '/imports/ui/App'
import '/both/i18n/loadLanguages'

console.log(getLang())
i18n.setLocale(getLang())
i18n.setOptions({
  defaultLocale: 'fr',
  sameLocaleOnServerConnection: true,
})

Meteor.startup(() => {
  const config = Meteor.settings.public
  render(<App />, document.getElementById('react-target'))
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
