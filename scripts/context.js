require('dotenv').config()

const context = {
  config: {
    apiUrl: process.env.API_URL,
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY
  }
}

module.exports = context