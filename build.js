'use strict'

const fs = require('fs')
const jsStringEscape = require('js-string-escape')

console.info('Reading JSCL from NPM package.')
const sjcl = fs.readFileSync(require.resolve('sjcl'), {encoding: 'utf8'})

console.info('Reading DownloadJS from NPM package.')
const downloadjs = fs.readFileSync(require.resolve('downloadjs/download.min.js'), {encoding: 'utf8'})

console.info('Reading skeleton HTML.')
const skeleton = fs.readFileSync('./src/skeleton.html', {encoding: 'utf8'})

console.info('Creating bundle HTML.')
let bundle = skeleton.replace('{{sjcl}}', sjcl)
bundle = encodeURIComponent(bundle)
bundle = jsStringEscape(bundle)

console.info('Creating web service HTML.')
const index = fs.readFileSync('./src/index.html', {encoding: 'utf8'})
	.replace('{{sjcl}}', sjcl)
	.replace('{{downloadjs}}', downloadjs)
	.replace('{{bundle-html}}', bundle)

console.info('Writing web service HTML.')
fs.writeFileSync('./index.html', index)
