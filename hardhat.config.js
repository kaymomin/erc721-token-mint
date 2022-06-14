/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "kovan",
   networks: {
      hardhat: {},
      kovan: {
         url: "https://kovan.optimism.io/",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
}
