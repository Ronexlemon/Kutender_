require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});
const KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    base_goerli :{
      url: `https://goerli.base.org`,
      chainId: 84531,
      accounts: [KEY],
      gasPrice: 800000000,
      
    },
   
    
  },
};