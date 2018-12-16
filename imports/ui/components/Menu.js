import React    from 'react'
import {Meteor} from 'meteor/meteor'
import i18n     from 'meteor/universe:i18n'
import T     from '../components/Translator'

export default ({link, name}) => (
  <div>
    <a href="#about" class="hide-link"><T>Ico.menu.about</T></a>
    <div class="whitepaper inb hide-link">
      <div class="outline">
        <b className="name"><T>Ico.menu.whitepaper</T></b>
        <div class="sub-lang">
          <a href="">FR</a><br/>
          <a href="">EN</a><br/>
          <a href="">CH</a><br/>
          <a href="">RUS</a><br/>
          <a href="">AR</a><br/>
        </div>
      </div>
    </div>
    <a href="#team" class="hide-link"><T>Ico.menu.team</T></a>
  </div>
)
