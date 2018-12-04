import React from 'react'
import i18n  from 'meteor/universe:i18n'
import T from './Translator'

const t = i18n.createTranslator('SocialNetwork')
const socialNetworks = {
  twitter: {
    classs:   "twitter_icon",
    nameImg:  "twitterImg",
    src:      "/images/picto/twitter.png",
    srcHover: "/images/picto/twitterbis.png",
  },
  facebook: {
    classs:   "facebook_icon",
    nameImg:  "facebookImg",
    src:      "/images/picto/facebook.png",
    srcHover: "/images/picto/facebookbis.png",
  },
  telegram: {
    classs:   "telegram_icon",
    nameImg:  "telegramImg",
    src:      "/images/picto/telegram.png",
    srcHover: "/images/picto/telegrambis.png",
  },
  github: {
    classs:   "github_icon",
    nameImg:  "githubImg",
    src:      "/images/picto/github.png",
    srcHover: "/images/picto/githubbis.png",
  },
  bitcoin: {
    classs:   "bitcoin_icon",
    nameImg:  "bitcoinImg",
    src:      "/images/picto/bitcoin.png",
    srcHover: "/images/picto/bitcoinbis.png",
  }
}

export default class SocialLink extends React.Component {
  constructor(props) {
    super(props)
    this.network = socialNetworks[this.props.name]
    this.state = {
      hover: false,
    }
  }
  render() {
    const {name} = this.props
    const {hover} = this.state
    const {classs, nameImg} = this.network
    const url = t(name)
    const src = this.network[hover ? 'srcHover' : 'src']
    return (
      <T>
        <a className={classs} href={url} target="_blank" key={name}
           onMouseOver={this.handleHover} onMouseOut={this.handleOut}
        >
          <img name={nameImg} src={src} />
        </a>
      </T>
    )
  }
  handleHover = () => {
    this.setState({hover: true})
  }
  handleOut = () => {
    this.setState({hover: false})
  }
}
