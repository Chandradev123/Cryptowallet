//Build blockchain of length 10
/*const Blockchain = require('./blockchain');

const bc = new Blockchain();


for(let i=0;i<10;i++)
{
    bc.addBlock(`foo ${i}`);
    console.log(bc.addBlock(`foo ${i}`).toString());
}*/

const Wallet = require('./wallet');
const wallet = new Wallet();
console.log(wallet.toString());
