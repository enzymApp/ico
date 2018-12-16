import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import T              from '../components/Translator'

const About = () => {
  return (
    <div className="background-radient-about">
      <div id="about">
        <Container>
            <Row className="align-items-center">
              <Col xs="12" sm="12" md="6">
                <img src="/images/logo/enzym-transparent-ico.png" className="logo-transparent" />
                <div className="para">
                  <p><T>Ico.about.para1</T></p>
                  <p><T>Ico.about.para2</T></p>
                  <p><T>Ico.about.para3</T></p>
                  <p><T>Ico.about.para4</T></p>
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
