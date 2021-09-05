const context = require('./context')
const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(context.config.apiUrl)
const helloContract = require("../artifacts/contracts/HelloBlockchain.sol/HelloBlockchain.json");

const contractAddress = '0xA54661Ab5782e73158426c28e433560cEaB3f553'


async function setMessage(){
  const transaction = {

  }
}

async function getMessage() {
  const contract = new web3.eth.Contract(helloContract.abi, contractAddress)
  const message = await contract.methods.message().call()
  console.log(message)
}

async function main() {
  const command = context.args[0]
  switch(command) {
    case "read":
      await getMessage()
      process.exit(0);
      break;
    case "write": {
      const newMessage = context.args[1]
      await setMessage(newMessage)
      process.exit(0)
    }
    default: {
      console.log("Unknown command")
      process.exit(1)
    }
  }
}
main()