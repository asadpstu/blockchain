const { GENESIS_DATA } = require('./config');
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
}


module.exports = Block;
