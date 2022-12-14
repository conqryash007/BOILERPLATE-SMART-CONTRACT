const hre = require("hardhat");

async function main() {
  const [owner, u1, u2, remainUser] = await hre.ethers.getSigners();

  const factory = await hre.ethers.getContractFactory("");
  const contract = await factory.deploy();

  await contract.deployed();

  console.log(`Deployed Contract Address: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
