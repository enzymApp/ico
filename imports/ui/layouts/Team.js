import React      from 'react'
import {Row, Col} from 'reactstrap'
import T     from '../components/Translator'

const Team = [
  {identity: 'Yannick Barnel', code: 'yannick', work: <T>Ico.team.yannick.work</T>, yellow: <T>Ico.team.yannick.yellow</T>, para: <T>Ico.team.yannick.para</T>, img: 'yannick.png', linkedin: 'barnel-yannick/'},
  {identity: 'Sylvain Duchesne', code: 'sylvain', yellow: <T>Ico.team.sylvain.yellow</T>, para: <T>Ico.team.sylvain.para</T>, img: 'sylvain.png', linkedin: 'duchesnesylvain/'},
  {identity: 'Jeremy Coleman', code: 'jeremy', para: <T>Ico.team.jeremy.para</T>, img: 'jeremy.png', linkedin: 'jeremycolemanscpo/'},
  {identity: 'Alfred Gautier', code: 'alfred', para: <T>Ico.team.alfred.para</T>, img: 'alfred.png', linkedin: 'alfred-gautier-036147152/'},
  {identity: 'Théophile Batoz', code: 'theophile', para: <T>Ico.team.theophile.para</T>, img: 'theophile.png', linkedin: 'theophilebatoz/'},
  {identity: 'Bertrand Viricel', code: 'bertrand', para: <T>Ico.team.bertrand.para</T>, img: 'bertrand.png', linkedin: 'bertrand-hello-world/'},
  {identity: 'Sophea Sock', code: 'sophea', para: <T>Ico.team.sophea.para</T>, img: 'sophea.png', linkedin: 'sopheasok/'},
  {identity: 'Octave Rolland', code: 'octave', para: <T>Ico.team.octave.para</T>, img: 'octave.png', linkedin: 'octave-rolland-a64b41167/'},
  {identity: 'Pauline Rochette', code: 'pauline', para: <T>Ico.team.pauline.para</T>, img: 'pauline.png', linkedin: 'pauline-rochette-624ba210b/'},
  {identity: 'Kevin Fuks', code: 'kevin', para: <T>Ico.team.kevin.para</T>, img: 'kevin.png', linkedin: 'ke-fu/'},
  {identity: 'Guillaume Larochette', code: 'guillaume', para: <T>Ico.team.guillaume.para</T>, img: 'guillaume.png', linkedin: 'glarochette/'},
  {identity: 'Frédéric Duchesne', code: 'fred', para: <T>Ico.team.fred.para</T>, img: 'frederic.png', linkedin: 'glarochette/'}

]

const Advisor = [
  {identity: 'Eric Burgel', work: <T>Ico.advisors.eric.work</T>, img: 'eric.png', linkedin: 'eric-burgel-a4313b5/'},
  {identity: 'Manon Burgel', work: <T>Ico.advisors.manon.work</T>, img: 'manon.png', linkedin: 'eric-burgel-a4313b5/'},
  {identity: 'Rémi Burgel', work: <T>Ico.advisors.remi.work</T>, img: 'remi.png', linkedin: 'r%C3%A9mi-burgel-1999ab149/'},
]

export default ({children, isUserPage}) => {
  return (
    <div className="background-img-team-ico">
      <div id="team">
        <div className="title"><h2>THE TEAM</h2></div>
        <Row>
          {Team.map(({identity, code, yellow, para, img, linkedin}) => (
            <Col xs="12" sm="6" md="6" key={identity}>
              <div className="profil">
                <div className="visual">
                  <img src={`/images/people/${img}`} className="img-profil" />
                </div>
                <div className="content">
                  <h2>{identity}</h2>
                  <h3><T>Ico.team.{code}.work</T></h3>
                  <p className="yellow">{yellow}</p>
                  <p className="para">{para}</p>
                </div>
                <div className="linkedin-ico">
                  <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank"><img src="/images/linkedin-ico.png" /></a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div id="advisors">
        <div className="title"><h2>OUR ADVISORS</h2></div>
        <Row>
          <div className="content-one">
            <h2><T>Ico.advisors.title</T></h2>
            <h3><T>Ico.advisors.subtitle</T></h3>
            <p className="para"><T>Ico.advisors.para1</T></p>
            <p className="para"><T>Ico.advisors.para2</T></p>
            <p className="para"><T>Ico.advisors.para3</T></p>
          </div>
          {Advisor.map(({identity, work, img, linkedin}) => (
            <Col xs="12" sm="4" md="4" key={identity}>
              <div className="profil">
                <div className="visual">
                  <img src={`/images/people/${img}`} className="img-profil" /><br/>
                </div>
                <div className="content">
                  <h2>{identity}</h2>
                  <h3>{work}</h3>
                </div>
                <div className="linkedin-ico">
                  <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank"><img src="/images/linkedin-ico.png" /></a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div id="financial">
        <div className="profil">
          <div className="visual">
            <img src="/images/people/nicolas.png" className="img-profil" />
          </div>
          <div className="content">
            <h2>Nicolas Paillet</h2>
            <h3><T>Ico.advisors.nicolas.work</T></h3>
            <p className="para"><T>Ico.advisors.nicolas.para</T></p>
          </div>
        </div>
      </div>
    </div>
  )
}
