const Web3 = require('web3');
const Router = require('@koa/router');
const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/")); 
// const web3 = new Web3(process.env.INFURA_URL); 
// const web3 = new Web3.providers.HttpProvider(process.env.INFURA_URL); 



                                
const dripFaucet = "0xFFE811714ab35360b67eE195acE7C10D93f89D8C";

const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
const holderAddress = "0x8894e0a0c962cb723c1976a4421c95949be2d4e3";
const dripHolderAddress = "0x20f663cea80face82acdfa3aae6862d246ce0333";


// just the `balanceOf()` is sufficient in this case
     const erc20TokenContractAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const abiJson = [
    { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
];

//drip Faucet
const abiJson2 = [
    { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "claimsAvailable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
];


//console.log(web3.eth.getBalance("0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5"))


const config = require('../config.json')
const configAbi = require('../abi/drip.json')
const cTokens = {
    busd: new web3.eth.Contract(
        erc20TokenContractAbi,
        busdAddress
    ),
    dbal: "",
    any: "",
    // dbal: new web3.eth.getBalance('0xd7787f4668ce9fa041ed6b9b6aab5582a6907f21')
    
}

// console.log(cTokens.methods)
const router = new Router();



router.get('/tokenBalance/:cToken/:address/:ca', async ctx => {
    const cToken = cTokens[ctx.params.cToken];
    if (typeof cToken === 'undefined') {
        ctx.status = 400;
        ctx.body = {
            error: `cToken ${ctx.params.cToken} does not exist`
        };
        return;
    }

    if (ctx.params.cToken == 'any') { 
        try {
            const bal = new web3.eth.Contract(
                erc20TokenContractAbi,
                ctx.params.ca
            )
            const tokenBalance = await bal
            .methods
            .balanceOf(ctx.params.address)
                .call()
                ctx.body = {
                    cToken: ctx.params.cToken,
                    address: ctx.params.address,
                    tokenBalanceWei: tokenBalance,
                    tokenBalanceToken: tokenBalance / (10 ** 18)
    
                };
            
        } catch (e) {
            console.log(e);
        }
        return;  
    }
    
    if (ctx.params.cToken == 'dbal') {
        
        try {
            const bal = await 
                new web3
                .eth
                .getBalance(ctx.params.address)
                
                    console.log("value", bal)
                    ctx.body = {
                        cToken: ctx.params.cToken,
                        address: ctx.params.address,
                        tokenBalanceWei: bal,
                        tokenBalanceToken: bal/(10**18)
            
                    };
                
               
        } catch (e) {
            console.log(e);
        }
        return;
    } 
     
    if (ctx.params.cToken === 'busd') {
        try {
            const tokenBalance = await cToken
                .methods
                .balanceOf(ctx.params.address)
                .call()
            
            // console.log(tokenBalance)
            ctx.body = {
                cToken: ctx.params.cToken,
                address: ctx.params.address,
                tokenBalanceWei: tokenBalance,
                tokenBalanceToken: tokenBalance / (10 ** 18)

            };
        } catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = {
                error: `Internal Server Error`
            }
        }
        return;
    }
        
    
});

module.exports = router;    