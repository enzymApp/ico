import React    from 'react'
import {Meteor} from 'meteor/meteor'
import i18n     from 'meteor/universe:i18n'
// import saveLanguage        from '/imports/api/users/saveLanguage'


export default ({imgSrc, langCode}) => (
  <a onClick={changeLanguage(langCode)}><img src={imgSrc} /></a>
)

const changeLanguage = (langCode) => () => {
  i18n.setLocale(langCode)
  console.log("new language", i18n.getLocale())
  // Meteor.userId() && saveLanguage(Meteor.userId(), langCode)
}
