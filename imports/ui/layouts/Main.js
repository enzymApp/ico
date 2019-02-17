import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import T               from '../components/Translator'
import WhitePaperLinks from '../components/WhitePaperLinks'

const IOS_URL = 'https://itunes.apple.com/app/id1437880226'
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=io.enzym.app'

const Main = () => {
  return (
    <div className="background_img_top">
      <Container>
        <Row id="main">
          <Col xs="12" sm="12" md="6" lg="8">
            <div id="visual">
              <h1>
                <T>Ico.intro.big</T>
                <br />
                <T>Ico.intro.big2</T>
              </h1>
              <h3><T>Ico.intro.small</T></h3>
              <img src="/images/application-enzym.png" className="mockup" />
            </div>
            <Row className="cta">
              <Col xs="12" sm="12" md="12" lg="4">
                <WhitePaperLinks>WHITEPAPER</WhitePaperLinks>
              </Col>
              <Col xs="12" sm="12" md="12" lg="4">
                <a href={IOS_URL} className="app" target="_blank"><T>Ico.appbtn.appstore</T></a>
              </Col>
              <Col xs="12" sm="12" md="12" lg="4">
                <a href={ANDROID_URL} className="app" target="_blank"><T>Ico.appbtn.playstore</T></a>
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4">
            <div className="bloc-promo">
              <div id="top_bloc">
                <div className="title">
                  <h2><T>Ico.token</T></h2>
                </div>

                <div className="bloc-promo__content outline text-center">
                  <p className=""><T>Ico.para1</T></p>
                  <h3 className="bloc-promo__title"><T>Ico.para2</T></h3>
                  <p className="bloc-promo__title bloc-promo__title--promo"><T>Ico.para3</T></p>
                  <div className="bloc-promo__contact">
                      <img src="/images/btn-contact.svg" title="Contact" alt="Image contact" />
                    </div>
                </div>

                <div className="bloc-promo__content outline text-center">
                  <p className=""><T>Ico.para4</T></p>
                  <h3 className="bloc-promo__title"><T>Ico.para5</T></h3>
                  <p className="bloc-promo__title bloc-promo__title--promo"><T>Ico.para6</T></p>
                </div>

                <div className="goal text-center">
                  <p><T>Ico.para7</T></p>
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
}
export default Main
