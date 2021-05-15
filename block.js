const { GENESIS_DATA } = require('./config');
const { cryptoHash } = require('./cryptoHash');
class Block {
    constructor({timeStamp,lastHash,hash,data}){
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis(){
        return new Block(GENESIS_DATA);
    }

    static mineBlock({lastBlock,data}){
        const timeStamp = Date.now();
        const lastHash = lastBlock.hash;
        return new this({
            timeStamp : timeStamp,
            lastHash : lastHash,
            data : data,
            hash : cryptoHash(timeStamp,lastHash,data)
        });
    }
}


module.exports = Block;
