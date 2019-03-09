import React    from 'react'
import { FormattedMessage as T } from 'react-intl'
import { Link } from "react-scroll"
import WhitePaperLinks from './WhitePaperLinks'

const Menu = () => (
  <div>
    <Link to="about" smooth className="hide-link"><T id="ico.menu.about" /></Link>
    <WhitePaperLinks className="inb hide-link">
      <b className="name"><T id="ico.menu.whitepaper" /></b>
    </WhitePaperLinks>
    <Link to="team" smooth className="hide-link"><T id="ico.menu.team" /></Link>
  </div>
)
export default Menu
