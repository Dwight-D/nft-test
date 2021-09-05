async function main() {
  const fs = require('fs')

  const helloFactory = await ethers.getContractFactory("HelloBlockchain")

  const helloContract = await helloFactory.deploy("Hello Blockchain")
  console.log(`Contract deployed to address ${helloContract.address}`)
  const time = new Date().toLocaleString()
  const content = `
  Name: ${helloContract.name}
  Location: ${helloContract.location}
  Address: ${helloContract.address}
  Type: ${helloContract.type}
  Signer: ${helloContract.signer}
  
  String: ${helloContract.toString()}
  `
  fs.writeFile(`./logs/deployment${time}.log`, content, err => {
    if(err) {
      console.error("Error while writing contract creation log")
      console.error(err)
      return
    }
  })
}

main()
  .then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})