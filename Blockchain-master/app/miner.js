const Wallet = require('../Wallet');
const Transaction = require('../wallet/transaction');
class Miner{
    constructor(blockchain , transactionPool , wallet , p2pServer){
      this.blockchain = blockchain;
      this.transactionPool = transactionPool;
      this.wallet = wallet;
      this.p2pServer = p2pServer;
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions();
       validTransactions.push(Transaction.rewardTransaction(this.wallet,Wallet.blockchainWallet()));
        // include a reward for the miner
        //
        
        const block = this.blockchain.addBlock(validTransactions);//create a block consisting of the valid transactions
        
        this.p2pServer.syncChains();        //synchronize chains in the peer -to-peer server

        this.transactionPool.clear();        //clear the transactionPool

        this.p2pServer.broadcastClearTransactions(); //broadcast to every miner to clear their transaction Pol
      
        return block;
    }

}

module.exports = Miner;