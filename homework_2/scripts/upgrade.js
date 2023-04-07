const { ethers, upgrades } = require("hardhat");
// 代理合约地址
const myContractProxyAddr = "0x553ec53cfe2643af45a10D7966aA0354771dE215"
async function main() {
    const MyContractV2 = await ethers.getContractFactory("MyContractV2");
    // 升级
    const myContractV2 = await upgrades.upgradeProxy(myContractProxyAddr, MyContractV2);
    console.log("myContractV2 upgraded");
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
