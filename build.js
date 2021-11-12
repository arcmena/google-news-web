const StyleDictionary = require('style-dictionary')

StyleDictionary.registerTransform({
  name: 'allTokenValue',
  type: 'value',
  matcher: function (token) {
    return (
      token.attributes.type === 'spacing_squish' ||
      token.attributes.type === 'shadow'
    )
  },
  transformer: function (token) {
    return token.original.value
  }
})

StyleDictionary.registerTransformGroup({
  name: 'custom/js',
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'allTokenValue']
})

const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + '/style-dictionary/config.json'
)

StyleDictionaryExtended.buildAllPlatforms()
