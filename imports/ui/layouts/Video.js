import React      from 'react'
import {Row, Col} from 'reactstrap'
import T     from '../components/Translator'

export default class Video extends React.Component {
  state = { video: false }

  render() {
    return (
      <div className="background-img-video-ico">
        {this.state.video ?
          <Row>
            <div className="videoWrapper-ico">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CUIr7w3d2Gs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Row>
          :
          <Row id="video">
            <div className="center">
              <a href="Javascript:void(0);"><img src="/images/picto/play-ico.png" className="play" onClick={this.toggleVideo}/></a>
            </div>
          </Row>
        }
      </div>
    )
  }
  toggleVideo = () => {
    this.setState({ video: true })
    console.log('toggle button handler: '+ this.state.video)
  }
}
