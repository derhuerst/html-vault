# [html-vault](https://html-vault.jannisr.de/) 🔐

**Store a secret securely in a standalone HTML file.** Encrypts any message/secret and generates something that can decrypt itself. I see mainly two advantages of this HTML-based solution over others:

- **low entry-barrier** – Everyone with a reasonably modern browser will be able to use the tool, without installing anything. It is also more platform-independent than other solutions.
- **self-contained** – The generated self-decrypting page contains all the logic it needs to decrypt the encrypted messages it contains. It can be easily stored as a file and requires no further tooling (which might break or change) to work.

Uses [`self-decrypting-html-page`](https://github.com/derhuerst/self-decrypting-html-page#self-decrypting-html-page) under the hood.

Inspired by [kiss by *Massimo Santini*](https://github.com/mapio/kiss).

[![build status](https://img.shields.io/travis/derhuerst/html-vault.svg)](https://travis-ci.org/derhuerst/html-vault)
[![dependency status](https://img.shields.io/david/derhuerst/html-vault.svg)](https://david-dm.org/derhuerst/html-vault#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/html-vault.svg)](https://david-dm.org/derhuerst/html-vault#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/html-vault.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/html-vault/issues).
