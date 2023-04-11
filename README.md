# zero2hero
zero2hero homework
此 repo 仅限于提交BNB 超级开发者 zero2hero 的作业交流所用

bsc 测试网 bnb代币合约地址：0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd,0x0d1Fb63f082a716E7F1Eb974Ebb3323168838C20
 
 
PancakeSwap factory address：0x6725F303b657a9451d8BA641348b6761A6CC7a17; 

bsc 测试网添加交易对 合约地址：0xF9983804D7BC47E658A07c3f1ACd13617276A40d

hero 和 bnb 流动性地址：0xA4ADAeD32857c51E5fBe9cFD3f7ed4F4d6C2Aa5F


hero代币地址：0x0d1Fb63f082a716E7F1Eb974Ebb3323168838C20

hero和bnb流动性挖矿合约地址：0x779e9Ce3edeBDa5182C45343Db48039B109526c8



homework_2 
使用hardhat在BSC测试网部署时，官方的RPC不可用，部署会失败，需要在quicknode上创建一个node才行！

合约部署了V1版本，合约主要功能是存储数据，设置数据，返回值为+1，V1初始化的时候，storage 值为 666，

部署后，会生成3个合约地址，分别为 admin合约，proxy合约，logic合约

当需要更新合约时，部署合约v2版本，v2版本功能更改为 不仅可以设置数值数据，还可以存储字符串数据

部署成功后，proxy指向v2版本合约地址即可实现合约升级 upgrade！


最后：

感谢BNB团队提供的学习机会，帮助更多的人进入WEB3的世界，希望以后能够接触更多web机会，给团队点赞👍！
