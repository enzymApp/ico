import React      from 'react'
import T from '../components/Translator'

export default class Chat extends React.Component {

  render() {
    return (
      <T _translateProps={['href']}>
        <a href="SocialNetwork.telegram" target="_blank" className="chat_ico" title="Chat Telegram">
          <div className="chat_ico__content">
          <img src="/images/picto/telegram.svg" title="Chat Telegram" alt="Chat telegram"/>
          </div>
        </a>
      </T>
    )
  }
}
