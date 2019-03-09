import React      from 'react'
import { injectIntl } from 'react-intl'
import { compose, withProps } from 'recompose'

const Chat = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="chat_ico" title="Chat Telegram">
    <div className="chat_ico__content">
      <img src="/images/picto/telegram.svg" title="Chat Telegram" alt="Chat telegram" />
    </div>
  </a>
)

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage: t } }) => ({
    url: t({ id: 'socialNetwork.telegram' })
  })),
)(Chat)
