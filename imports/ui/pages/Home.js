import React          from 'react'

import SocialLink     from '../components/SocialLink'
import About          from '../layouts/About'
import Header         from '../layouts/Header'
import Main           from '../layouts/Main'
import Video          from '../layouts/Video'
import Team           from '../layouts/Team'


export default function Home({children}) {
  return (
    <div>
      <Header />
      <Main />
      <Video />
      <About />
      <Team />
      <div className="social_links_ico" align="right">
        <SocialLink name="facebook" />
        <SocialLink name="twitter" />
        <SocialLink name="telegram" />
        <SocialLink name="github" />
        <SocialLink name="bitcoin" />
      </div>
    </div>
  )
}
