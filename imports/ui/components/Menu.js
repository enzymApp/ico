import React    from 'react'
import WhitePaperLinks from './WhitePaperLinks'

const Menu = ({link, name}) => (
  <div>
    <a href="#about" className="hide-link">About Enzym</a>
    <WhitePaperLinks className="inb hide-link">
      <b className="name">Whitepaper</b>
    </WhitePaperLinks>
    <a href="#team" className="hide-link">Team</a>
  </div>
)
export default Menu
