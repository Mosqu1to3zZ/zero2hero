// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// 我们的合约需要继承Initializable
contract MyContractV2 is Initializable {
    uint storageValue;
    // 新的状态变量
    string storageStr;
    function initialize(uint initValue) public initializer {
        storageValue = initValue;
    }
    function setValue(uint newValue) public {
        storageValue = newValue;
    }
    function getValue() public view returns (uint) {
        return storageValue;
    }
    // 设置 storageStr
    function setStr(string memory newStr) public {
        storageStr = newStr;
    }
    // 查询 storageStr
    function getStr() public view returns (string memory) {
        return storageStr;
    }
}