require("@nomicfoundation/hardhat-toolbox");
//新增引用
require("@nomicfoundation/hardhat-chai-matchers");

require('@openzeppelin/hardhat-upgrades');
const { privateKey,bscApiKey } = require('./secrets.json');
process.env.UNDICI_CONNECT_TIMEOUT = 60000; // 设置连接超时时间为60秒

module.exports = {
    
  networks: {
  
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    bsctestnet: {
      url: `quicknode_key`,
      chainId: 97,
      gasPrice: 20000000000,
      //gas:4100000,
      accounts: [privateKey]
    }
  },
    solidity: "0.8.2",
    
  }