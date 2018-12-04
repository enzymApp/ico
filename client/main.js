import { Meteor } from 'meteor/meteor'
import React      from 'react'
import { render } from 'react-dom'
import App from '/imports/ui/App'
import '/both/i18n/loadLanguages'

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'))
})
