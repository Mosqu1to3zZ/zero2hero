const { ethers, upgrades } = require("hardhat");
async function main() {
  // 获取 MyContract合约
  const MyContract = await ethers.getContractFactory("MyContractV1");
  // 部署, 传入初始化 storageValue 的值
  //console.log(MyContract)
  const myContract = await upgrades.deployProxy(
    MyContract, // 要部署的合约
    [666],  // 初始化参数
    { initializer: 'initialize' } // 指定初始化函数名称
  );
  // 等待 MyContract合约部署完成
  await myContract.deployed();
  // 输出 MyContract合约地址
  console.log("MyContractV1 deployed to:", myContract.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
