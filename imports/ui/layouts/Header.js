import React      from 'react'
import {Row, Col} from 'reactstrap'

import LanguageFlag from '../components/LanguageFlag'
import Menu         from '../components/Menu'

const LANGS = [
  {langCode: 'fr', imgSrc: '/images/picto/flag_FR.png'},
  {langCode: 'en', imgSrc: '/images/picto/flag_EN.png'},
]

export default class Header extends React.Component {
  state = { status: false }

  render() {
    return (
      <Row id="header">
        <Col xs="6" md="8">
          <div id="logo_top">
            <img src="/images/logo/enzym_small_white.png" />
            <div className="left-side">
              <Menu />
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" className="right-side">
          {LANGS.map(({langCode, imgSrc}) => (
            <LanguageFlag {...{langCode, imgSrc}} key={langCode} />
          ))}
        </Col>
      </Row>
    )
  }
  toggleStatus = () => {
    const {status} = this.state
    this.setState({ status: !status })
    console.log('toggle button handler: '+ status)
  }
}
