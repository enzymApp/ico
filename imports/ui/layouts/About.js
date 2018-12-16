import React from 'react'
import {Row, Col} from 'reactstrap'
import T              from '../components/Translator'

const About = () => {
  return (
    <div className="background-radient-about">
      <Row id="about">
        <Col xs="12" sm="6" md="6">
          <img src="/images/logo/enzym-transparent-ico.png" className="logo-transparent" />
          <div className="para">
            <p><T>Ico.about.para1</T></p>
            <p><T>Ico.about.para2</T></p>
            <p><T>Ico.about.para3</T></p>
            <p><T>Ico.about.para4</T></p>
          </div>
        </Col>
        <Col xs="12" sm="6" md="6">
          <div id="mockup">
            <img src="/images/mockup-enzym-ico.png" />
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default About
