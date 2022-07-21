
// import Web3 from "web3";
const Web3 = require('web3');
const routerContractAbi = require("./router.json");


//const CHAIN_ID = 56789

const token_decimals = 18 // 6 // 8

const WNETH_decimals = 18
const RPC = 'https://chain.nodoka.network'

const ROUTER = '0x844Dc167875db337B14E668bE8ebfd264a75c441'
const WNETH = '0x9Eb6C610f1E203cA07A05dD357CCAd2c08eeA710'

const USDT = "0x102299179c7617a2BEF15a98abB1CD0B48D18A65"
const DAI = "0xADF067932caD7C62b132bdc5577D88533a46D6cE"
const ETH = "0xE00Ae75194A90eB4AF04c1Dc9FB55bcE7ECddDaa"


run()
async function run() {
    let count = 10000; //Кол-во токенов на обмен
    let res_0 = await tokenToNETH(count, DAI, token_decimals);
    console.log("res_0: ", res_0 / 10 ** WNETH_decimals);
}


async function tokenToNETH(count, token_adress, token_decimals) {

    let Web3Client = new Web3(new Web3.providers.HttpProvider(RPC));
    let contractRouterWeb3 = new Web3Client.eth.Contract(
        routerContractAbi,
        ROUTER
    );
    let countOne = 10 ** token_decimals
    let nethCost2 = await contractRouterWeb3.methods.getAmountsOut(countOne + "", [token_adress, WNETH]).call();
    let res1 = parseFloat(nethCost2[1])
    return res1


}

module.exports = {tokenToNETH}
