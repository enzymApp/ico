import { buildLocales } from './helpers'

const localeData = {
  en: {
    ico: require('./en/ico.yml').default,
    socialNetwork: require('./en/socialNetwork.yml').default,
  },
  fr: {
    ico: require('./fr/ico.yml').default,
    socialNetwork: require('./en/socialNetwork.yml').default,
  }
}

const locales = buildLocales(localeData)

export default locales
