import React      from 'react'
import {Container, Row, Col} from 'reactstrap'

export default class Chat extends React.Component {

  render() {
    return (
      <a href="#" target="_blank" class="chat_ico" title="Chat Telegram">
        <div class="chat_ico__content">
        <img src="/images/picto/logo-telegram.svg" title="Chat Telegram" alt="Chat telegram"/>
        </div>
      </a>
    )
  }
}
