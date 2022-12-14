const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const [owner, u1, u2, remainUser] = await ethers.getSigners();

    const factory = await hre.ethers.getContractFactory("");
    const contract = await factory.deploy();

    await contract.deployed();

    return { owner, u1, u2, remainUser, contract };
  }

  describe("Deployment", function () {
    it("Deploys correctly", async () => {
      const { owner, u1, u2, remainUser, contract } = await loadFixture(
        deployOneYearLockFixture
      );

      expect(contract.address).to.be.properAddress;
    });
  });
});
