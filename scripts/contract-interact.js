const context = require('./context')
const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(context.config.apiUrl)
const helloContractDef = require("../artifacts/contracts/HelloBlockchain.sol/HelloBlockchain.json");
const contractAddress = '0xA54661Ab5782e73158426c28e433560cEaB3f553'
const contract = new web3.eth.Contract(helloContractDef.abi, contractAddress)


async function setMessage(newMessage){
  let publicKey = context.config.publicKey;
  const nonce = await web3.eth.getTransactionCount(publicKey, 'latest')
  const gasEstimate = await contract.methods.update(newMessage).estimateGas()
  console.log(`Estimated gas: ${gasEstimate}`)
  const transaction = {
    'from': publicKey,
    'to': contractAddress,
    'nonce': nonce,
    'gas': gasEstimate,
    'maxFeePerGas': 10000000108,
    'data': contract.methods.update(newMessage).encodeABI()
  }
  const signPromise = web3.eth.accounts.signTransaction(transaction, context.config.privateKey)
  signPromise.then((signedTrx) => {
    console.log("Signed transaction, submitting")
    web3.eth.sendSignedTransaction(signedTrx.rawTransaction, function(err, hash) {
      if(!err) {
        console.log(`Successfully sent transaction ${hash}`)
      } else {
        console.error("Something went wrong submitting transaction: ", err)
      }
    })
  }).catch((err) => {
    console.error("Promise failed: ", err)
  })
}

async function getMessage() {
  const message = await contract.methods.message().call()
  console.log(message)
}

async function main() {
  const command = context.args[0]
  switch(command) {
    case "read":
      await getMessage()
      break;
    case "write": {
      const newMessage = context.args[1]
      console.log("Setting new message to " + newMessage)
      await setMessage(newMessage)
      break;
    }
    default: {
      console.log("Unknown command")
      process.exit(1)
    }
  }
}
main()