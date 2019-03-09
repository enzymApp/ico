import React      from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FormattedMessage as T } from 'react-intl'

const team = [
  {identity: 'Yannick Barnel',       code: 'yannick',   linkedin: 'barnel-yannick/',  yellow: true},
  {identity: 'Sylvain Duchesne',     code: 'sylvain',   linkedin: 'duchesnesylvain/', yellow: true},
  {identity: 'Jeremy Coleman',       code: 'jeremy',    linkedin: 'jeremycolemanscpo/'},
  {identity: 'Alfred Gautier',       code: 'alfred',    linkedin: 'alfred-gautier-036147152/'},
  {identity: 'Théophile Batoz',      code: 'theophile', linkedin: 'theophilebatoz/'},
  {identity: 'Bertrand Viricel',     code: 'bertrand',  linkedin: 'bertrand-hello-world/'},
  {identity: 'Sophea Sock',          code: 'sophea',    linkedin: 'sopheasok/'},
  {identity: 'Octave Rolland',       code: 'octave',    linkedin: 'octave-rolland-a64b41167/'},
  {identity: 'Pauline Rochette',     code: 'pauline',   linkedin: 'pauline-rochette-624ba210b/'},
  {identity: 'Kevin Fuks',           code: 'kevin',     linkedin: 'ke-fu/'},
  {identity: 'Guillaume Larochette', code: 'guillaume', linkedin: 'glarochette/'},
  // {identity: 'Frédéric Duchesne',    code: 'frederic',  linkedin: 'fredericduchesne/'}
]

const advisor = [
  {identity: 'Eric Burgel',  code: 'eric',  linkedin: 'eric-burgel-a4313b5/'},
  {identity: 'Manon Burgel', code: 'manon', linkedin: 'eric-burgel-a4313b5/'},
  {identity: 'Rémi Burgel',  code: 'remi',  linkedin: 'r%C3%A9mi-burgel-1999ab149/'},
]

const Team = () => (
  <div className="background-img-team">
    <Container>
      <div id="team">
        <div className="title"><h2><T id="ico.team.head" /></h2></div>
        <Row>
          {team.map(({identity, code, linkedin, yellow}) => (
            <Col xs="12" sm="6" md="6" key={identity}>
              <div className="profil">
                <div className="visual">
                  <img src={`/images/people/${code}.png`} className="img-profil" />
                </div>
                <div className="content">
                  <h2>{identity}</h2>
                  <h3><T id={`ico.team.${code}.work`} /></h3>
                  {yellow && <p className="yellow"><T id={`ico.team.${code}.yellow`} /></p>}
                  <p className="para"><T id={`ico.team.${code}.para`} /></p>
                </div>
                <div className="linkedin">
                  <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">
                    <img src="/images/linkedin-ico.png" />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    <Container>
      <div id="advisors">
        <div className="title"><h2><T id="ico.advisors.head" /></h2></div>
        <Row>
          <div className="content-one">
            <h2><T id="ico.advisors.title" /></h2>
            <h3><T id="ico.advisors.subtitle" /></h3>
            <p className="para"><T id="ico.advisors.para1" /></p>
            <p className="para"><T id="ico.advisors.para2" /></p>
            <p className="para"><T id="ico.advisors.para3" /></p>
          </div>
          {advisor.map(({identity, code, linkedin}) => (
            <Col xs="12" sm="4" md="4" key={identity}>
              <div className="profil">
                <div className="visual">
                  <img src={`/images/people/${code}.png`} className="img-profil" /><br/>
                </div>
                <div className="content">
                  <h2>{identity}</h2>
                  <h3><T id={`ico.advisors.${code}.work`} /></h3>
                </div>
                <div className="linkedin">
                  <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">
                    <img src="/images/linkedin-ico.png" />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    <Container>
      <div id="financial">
        <div className="profil">
          <div className="visual">
            <img src="/images/people/nicolas.png" className="img-profil" />
          </div>
          <div className="content">
            <h2><T id="ico.advisors.nicolas.name" /></h2>
            <h3><T id="ico.advisors.nicolas.work" /></h3>
            <p className="para"><T id="ico.advisors.nicolas.para" /></p>
          </div>
        </div>
      </div>
    </Container>
  </div>
)
export default Team
