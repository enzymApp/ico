import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FormattedMessage as T } from 'react-intl'

const About = () => {
  return (
    <div className="background-radient-about">
      <div id="about">
        <Container>
          <Row className="align-items-center">
            <Col xs="12" sm="12" md="6">
              <img src="/images/logo/enzym-transparent-ico.png" className="logo-transparent" />
              <div className="para">
                <p><T id="ico.about.para1" /></p>
                <p><T id="ico.about.para2" /></p>
                <p><T id="ico.about.para3" /></p>
                <p><T id="ico.about.para4" /></p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6">
              <div id="mockup">
                <img src="/images/mockup-enzym-ico.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default About
