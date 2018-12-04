import React      from 'react'
import {Row, Col} from 'reactstrap'
import T       from '../components/Translator'

export default ({children, isUserPage}) => {
  return (
    <div className="background_img_top-ico">
      <Row id="main">
        <Col xs="12" sm="6" md="8">
          <div id="visual">
            <h1>
              <T>Ico.intro.big</T><br/><T>Ico.intro.big2</T>
            </h1>
            <h3><T>Ico.intro.small</T></h3>
            <img src="/images/application-enzym.png" className="mockup"/>
          </div>
          <Row className="cta">
            <Col xs="12" sm="6" md="4">
              <a href="" className="outline">WHITEPAPER</a>
            </Col>
            <Col xs="12" sm="6" md="4">
              <a href="https://itunes.apple.com/app/id1437880226" className="app" target="_blank">GO TO APP STORE</a>
            </Col>
            <Col xs="12" sm="6" md="4">
              <a href="https://play.google.com/store/apps/details?id=com.enzym_proto" className="app" target="_blank">GO TO PLAY STORE</a>
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="6" md="4">
          <div id="block">
            <div id="top_bloc">
              <div className="title">
                <h2><T>Ico.token</T></h2>
                <h3><T>Ico.start</T><br/><T>Ico.date</T></h3>
              </div>
              <p><T>Ico.para1</T></p>
              <hr />
              <div className="goal">
                <h3><T>Ico.goal</T></h3>
                <div className="center">
                  <img src="/images/picto/eth.png" className="eth"/>
                </div>
                <h3>20 000 000 ETH</h3>
              </div>
              <hr />
              <p><T>Ico.para2</T></p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
