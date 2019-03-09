import React    from 'react'
import { compose, withProps } from 'recompose'
import withAppState from '../withAppState'


const LanguageFlag = ({ imgSrc, langCode, setLocale }) => (
  <a className="language-flag__ico" onClick={() => setLocale(langCode)}><img src={imgSrc} /></a>
)

export default compose(
  withAppState,
  withProps(({ setSession }) => ({
    setLocale: locale => setSession({ locale })
  }))
)(LanguageFlag)
