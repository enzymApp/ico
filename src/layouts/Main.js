import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FormattedMessage as T } from 'react-intl'
import WhitePaperLinks from '../components/WhitePaperLinks'

const IOS_URL = 'https://itunes.apple.com/app/id1437880226'
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=io.enzym.app'

const Main = () => (
  <div className="background_img_top">
    <Container>
      <Row id="main">
        <Col xs="12" sm="12" md="6" lg="8">
          <div id="visual">
            <h1>
              <T id="ico.intro.big" />
              <br />
              <T id="ico.intro.big2" />
            </h1>
            <h3><T id="ico.intro.small" /></h3>
            <img src="/images/application-enzym.png" className="mockup" />
          </div>
          <Row className="cta">
            <Col xs="12" sm="12" md="12" lg="4">
              <WhitePaperLinks>WHITEPAPER</WhitePaperLinks>
            </Col>
            <Col xs="12" sm="12" md="12" lg="4">
              <a href={IOS_URL} className="app" target="_blank"><T id="ico.appbtn.appstore" /></a>
            </Col>
            <Col xs="12" sm="12" md="12" lg="4">
              <a href={ANDROID_URL} className="app" target="_blank"><T id="ico.appbtn.playstore" /></a>
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="12" md="6" lg="4">
          <div className="bloc-promo">
            <div id="top_bloc">
              <div className="title">
                <h2><T id="ico.token" /></h2>
              </div>

              <div className="bloc-promo__content outline text-center">
                <p className=""><T id="ico.para1" /></p>
                <h3 className="bloc-promo__title"><T id="ico.para2" /></h3>
                <p className="bloc-promo__title bloc-promo__title--promo"><T id="ico.para3" /></p>
                <div className="bloc-promo__contact">
                  <img src="/images/btn-contact.svg" title="Contact" alt="Image contact" />
                </div>
              </div>

              <div className="bloc-promo__content outline text-center">
                <p className=""><T id="ico.para4" /></p>
                <h3 className="bloc-promo__title"><T id="ico.para5" /></h3>
                <p className="bloc-promo__title bloc-promo__title--promo"><T id="ico.para6" /></p>
              </div>

              <div className="goal text-center">
                <p><T id="ico.para7" /></p>
                <img src="/images/picto/eth.png" className="eth" />
                <h3>25 000 ETH</h3>
              </div>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)
export default Main
