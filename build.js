var fs = require('fs')
var jsStringEscape = require('js-string-escape')

var sjcl, skeleton, bundle, index

console.info('Reading JSCL from NPM package.')
sjcl = fs.readFileSync(require.resolve('sjcl'), {encoding: 'utf8'})

console.info('Reading DownloadJS from NPM package.')
downloadjs = fs.readFileSync(require.resolve('downloadjs/download.min.js'), {encoding: 'utf8'})

console.info('Reading skeleton HTML.')
skeleton = fs.readFileSync('./src/skeleton.html', {encoding: 'utf8'})

console.info('Creating bundle HTML.')
bundle = skeleton.replace('{{sjcl}}', sjcl)
bundle = encodeURIComponent(bundle)
bundle = jsStringEscape(bundle)

console.info('Reading web service HTML.')
index = fs.readFileSync('./src/index.html', {encoding: 'utf8'})

console.info('Creating web service HTML.')
index = index.replace('{{sjcl}}', sjcl)
index = index.replace('{{downloadjs}}', downloadjs)
index = index.replace('{{bundle-html}}', bundle)

console.info('Writing web service HTML.')
fs.writeFileSync('./index.html', index)
