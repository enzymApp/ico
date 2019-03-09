const localeData = {
  en: {
    ico: require('./en/ico.yml').default,
    socialNetwork: require('./en/socialNetwork.yml').default,
  },
  fr: {
    ico: require('./fr/ico.yml').default,
    socialNetwork: require('./en/socialNetwork.yml').default,
  }
}

const objectify = (obj, [k, v]) => { obj[k] = v ; return obj }
const recursiveMerge = (obj, item) => {
  if(Array.isArray(item)) {
    obj[item[0]] = item[1]
  } else {
    Object.assign(obj, item)
  }
  return obj
}


function loadSections(sections) {
  return Object.entries(sections).map(([section, file]) => parseLocaleFile(section, file))
    .reduce(recursiveMerge, {})
}

function parseLocaleFile(section, content) {
  return recParseContent([section], content)
}

function recParseContent(parentPath, obj) {
  return Object.entries(obj)
    .map(([key, value]) => {
      const fullPath = [...parentPath, key]
      if(typeof value === 'object') return recParseContent(fullPath, value)
      return [fullPath.join('.'), value]
    })
    .reduce(recursiveMerge, {})
}

const locales = Object.entries(localeData).map(([lang, sections]) => ([lang, loadSections(sections, lang)]))
  .reduce(objectify, {})

export default locales
