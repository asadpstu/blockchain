const Block = require('./block')
const { cryptoHash } = require('./cryptoHash')
class Blockchain{
  constructor(){
      this.chain = [Block.genesis()]
  }

  addBlock({data}){
    const newBlock = Block.mineBlock({
        lastBlock : this.chain[this.chain.length - 1],
        data
    });
    this.chain.push(newBlock)
  }

  static isValidChain(chain){
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
    for(var i=1;i<chain.length;i++)
    {
        const { timeStamp,data,lastHash,hash } = chain[i];
        const lastActualHash = chain[i-1].hash;
        if(lastHash !== lastActualHash ) return false;

        const validHash = cryptoHash(timeStamp,lastHash,data);
        if(hash !== validHash) return false;
    }
    return true; 
  }
}

module.exports = Blockchain;