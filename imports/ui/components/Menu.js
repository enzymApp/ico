import React    from 'react'
import T               from '../components/Translator'
import WhitePaperLinks from './WhitePaperLinks'
import { Link, animateScroll as scroll } from "react-scroll"

const Menu = ({link, name}) => (
  <div>
  <Link to="about" smooth={true} className="hide-link"><T>Ico.menu.about</T></Link>
    <WhitePaperLinks className="inb hide-link">
      <b className="name"><T>Ico.menu.whitepaper</T></b>
    </WhitePaperLinks>
    <Link to="team" smooth={true} className="hide-link"><T>Ico.menu.team</T></Link>
  </div>
)
export default Menu
