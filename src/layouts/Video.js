import React      from 'react'
import {Row, Col} from 'reactstrap'

export default class Video extends React.Component {
  state = { video: false }

  render() {
    const { video } = this.state
    return (
      <div className="background-img-video">
        {video ? (
          <Row>
            <div className="videoWrapper">
              <iframe
                title="Video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CUIr7w3d2Gs"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Row>
        ) : (
          <Row id="video">
            <div className="center">
              <a href="Javascript:void(0);">
                <img src="/images/picto/play-ico.png" className="play" onClick={this.toggleVideo}/>
              </a>
            </div>
          </Row>
        )}
      </div>
    )
  }
  toggleVideo = () => {
    this.setState({ video: true })
  }
}
