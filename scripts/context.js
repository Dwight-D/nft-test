require('dotenv').config()

const context = {
  config: {
    apiUrl: process.env.API_URL,
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY
  },
  args: process.argv.slice(2)
}

module.exports = context