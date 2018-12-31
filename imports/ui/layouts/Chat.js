import React      from 'react'
import {Container, Row, Col} from 'reactstrap'

export default class Chat extends React.Component {

  render() {
    return (
      <a href="#" target="_blank" className="chat_ico" title="Chat Telegram">
        <div className="chat_ico__content">
        <img src="/images/picto/telegram.svg" title="Chat Telegram" alt="Chat telegram"/>
        </div>
      </a>
    )
  }
}
