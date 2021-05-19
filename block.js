const { GENESIS_DATA } = require('./config');
const { cryptoHash } = require('./cryptoHash');
class Block {
    constructor({timeStamp,lastHash,hash,data,nonce,difficulty}){
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    static genesis(){
        return new Block(GENESIS_DATA);
    }

    static mineBlock({lastBlock,data}){
        let hash,timeStamp;
        //const timeStamp = Date.now();
        const lastHash = lastBlock.hash;
        const { difficulty } = lastBlock;
        let nonce = 0;
        do{
          nonce++;
          timeStamp = Date.now();
          hash = cryptoHash(timeStamp,lastHash,data,nonce,difficulty)
        }
        while(hash.substring(0,difficulty) !== '0'.repeat(difficulty))
        return new this({
            timeStamp : timeStamp,
            lastHash : lastHash,
            data : data,
            difficulty,
            nonce,
            hash
        });
    }
}


module.exports = Block;
