const { ethers } = require("hardhat");
const fs = require("fs");
async function deployContract() {
  const contract = await ethers.getContractFactory("YOUR_CONTRACT_NAME");
  const [deployer] = await ethers.getSigners();
  const DeployedContractInstance = await contract.connect(deployer).deploy();

  const contractAddress = await DeployedContractInstance.getAddress();
  const contractInfo = {
    contractAddress: contractAddress,
    deployerAddress: deployer.address,
  };

  fs.writeFile("contract_address.json", JSON.stringify(contractInfo), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Contain the The Contract addess");
  });
}

deployContract();
