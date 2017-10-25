'use strict'

const encryption = require('sodium-encryption')
const generateHTML = require('self-decrypting-html-page')
const {saveAs} = require('file-saver')

const hintEl = document.getElementById('hint')
const messageEl = document.getElementById('message')
const submitEl = document.getElementById('submit')
const keyEl = document.getElementById('key')

const showError = (el, message) => {
	el.classList.add('error')
	hintEl.innerHTML = message
	hintEl.classList.remove('hidden')
	keyEl.classList.add('hidden')
}
const resetForm = () => {
	hintEl.classList.add('hidden')
	messageEl.classList.remove('error')
	submitEl.classList.remove('error')
	keyEl.classList.add('hidden')
}

submitEl.addEventListener('click', () => {
	resetForm()

	if (messageEl.value.length === 0) {
		return showError(messageEl, 'Please enter a message.')
	}
	const data = Buffer.from(messageEl.value)

	try {
		const nonce = encryption.nonce()
		const key = encryption.key()
		const encrypted = encryption.encrypt(data, nonce, key)

		console.log('nonce', nonce) // todo

		keyEl.innerText = 'This is your key:\n' + key.toString('hex')
		keyEl.classList.remove('hidden')

		const html = new Blob([generateHTML(nonce, encrypted)], {
			type: 'text/html;charset=utf-8'
		})
		saveAs(html, 'encrypted-secret.html')
	} catch (err) {
		console.error(err)
		return showError(submitEl, 'An error occured.')
	}
}, false)
