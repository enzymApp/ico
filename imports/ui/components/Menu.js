import React    from 'react'
import {Meteor} from 'meteor/meteor'
import i18n     from 'meteor/universe:i18n'
import WhitePaperLinks from '../components/WhitePaperLinks'

export default ({link, name}) => (
  <div>
    <a href="#about" class="hide-link">About Enzym</a>
    <WhitePaperLinks className="inb hide-link">
      <b className="name">Whitepaper</b>
    </WhitePaperLinks>
    <a href="#team" className="hide-link">Team</a>
  </div>
)
