const context = require('./context')
const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(context.config.apiUrl)
const helloContract = require("../artifacts/contracts/HelloBlockchain.sol/HelloBlockchain.json");

const contractAddress = '0xA54661Ab5782e73158426c28e433560cEaB3f553'


async function setMessage(){

}

async function main() {
  const contract = new web3.eth.Contract(helloContract.abi, contractAddress)
  const message = await contract.methods.message().call()
  console.log(contract)
  console.log(message)
}
main()