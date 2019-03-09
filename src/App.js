import React from 'react'
import { IntlProvider } from 'react-intl'
import { compose, withState, withProps } from 'recompose'
import updateAppState from './updateAppState'
import Routes from './Routes'
import './styles/main.scss'
import locales from '/src/modules/intl/loadLocales'

const App = ({ locale, messages }) => (
  <IntlProvider {...{ locale, messages }}>
    <Routes />
  </IntlProvider>
)

export default compose(
  withState('session', 'setSession', ({ locale }) => ({ locale: locale || 'en' })),
  updateAppState,
  withProps(({ session: { locale } }) => ({
    messages: locales[locale]
  }))
)(App)
