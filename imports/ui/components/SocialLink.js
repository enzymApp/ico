import React from 'react'
import i18n  from 'meteor/universe:i18n'
import T from './Translator'

const t = i18n.createTranslator('SocialNetwork')
const socialNetworks = {
  twitter: {
    classs:   "twitter_icon",
    nameImg:  "twitterImg",
    src:      "/images/picto/twitter.svg"
  },
  facebook: {
    classs:   "facebook_icon",
    nameImg:  "facebookImg",
    src:      "/images/picto/facebook.svg"
  },
  telegram: {
    classs:   "telegram_icon",
    nameImg:  "telegramImg",
    src:      "/images/picto/telegram.svg"
  },
  github: {
    classs:   "github_icon",
    nameImg:  "githubImg",
    src:      "/images/picto/github.svg"
  },
  bitcoin: {
    classs:   "bitcoin_icon",
    nameImg:  "bitcoinImg",
    src:      "/images/picto/bitcoin.svg"
  }
}

export default class SocialLink extends React.Component {
  constructor(props) {
    super(props)
    this.network = socialNetworks[this.props.name]
  }
  render() {
    const {name} = this.props
    const {classs, nameImg} = this.network
    const url = t(name)
    const src = this.network['src']
    return (
      <T>
        <a className={classs} href={url} target="_blank" key={name}>
          <img name={nameImg} src={src} />
        </a>
      </T>
    )
  }
}
