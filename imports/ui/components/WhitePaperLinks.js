import React from 'react'

const FILES_URL = 'https://s3-eu-west-1.amazonaws.com/files.enzym.io/'
const getWpUrl = (langCode) => FILES_URL + `White Paper ${langCode}.pdf`

export default ({ children, className }) => (
  <div className={`whitepaper ${className}`}>
    <div className="outline">
      {children}
      <div className="sub-lang">
        {['EN', 'FR', 'CN', 'AR'].map(langCode => (
          <div className={langCode} key={langCode}><a target="_blank" href={getWpUrl(langCode)}>{langCode}</a></div>
        ))}
      </div>
    </div>
  </div>
)
