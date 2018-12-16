import React    from 'react'
import i18n     from 'meteor/universe:i18n'
// import saveLanguage        from '/imports/api/users/saveLanguage'


const LanguageFlag = ({imgSrc, langCode}) => (
  <a onClick={changeLanguage(langCode)}><img src={imgSrc} /></a>
)
export default LanguageFlag

const changeLanguage = (langCode) => () => {
  i18n.setLocale(langCode)
  console.log("new language", i18n.getLocale())
  // Meteor.userId() && saveLanguage(Meteor.userId(), langCode)
}
