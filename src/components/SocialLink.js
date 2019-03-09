import React from 'react'
import { injectIntl } from 'react-intl'
import { compose, withProps } from 'recompose'

const socialNetworks = {
  twitter: {
    className:   "twitter_icon",
    nameImg:  "twitterImg",
    src:      "/images/picto/twitter.svg"
  },
  facebook: {
    className:   "facebook_icon",
    nameImg:  "facebookImg",
    src:      "/images/picto/facebook.svg"
  },
  telegram: {
    className:   "telegram_icon",
    nameImg:  "telegramImg",
    src:      "/images/picto/telegram.svg"
  },
  github: {
    className:   "github_icon",
    nameImg:  "githubImg",
    src:      "/images/picto/github.svg"
  },
  bitcoin: {
    className:   "bitcoin_icon",
    nameImg:  "bitcoinImg",
    src:      "/images/picto/bitcoin.svg"
  }
}

const SocialLink = ({ className, name, src, nameImg, url }) => (
  <a className={className} href={url} target="_blank" rel="noopener noreferrer">
    <img name={nameImg} src={src} alt={name} />
  </a>
)

export default compose(
  injectIntl,
  withProps(({ name, intl: { formatMessage: t } }) => ({
    ...socialNetworks[name],
    url: t({ id: `socialNetwork.${name}` })
  })),
)(SocialLink)
