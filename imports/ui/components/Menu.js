import React    from 'react'
import T               from '../components/Translator'
import WhitePaperLinks from './WhitePaperLinks'

const Menu = ({link, name}) => (
  <div>
    <a href="#about" class="hide-link"><T>Ico.menu.about</T></a>
    <WhitePaperLinks className="inb hide-link">
      <b className="name"><T>Ico.menu.whitepaper</T></b>
    </WhitePaperLinks>
    <a href="#team" class="hide-link"><T>Ico.menu.team</T></a>
  </div>
)
export default Menu
