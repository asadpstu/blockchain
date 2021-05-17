const Blockchain = require("./blockchain")
const Block = require("./block")

describe("Blockchain",()=>{
    const blockchain = new Blockchain();
    it(`contains 'chain' array instance`,()=>{
        expect(blockchain.chain instanceof Array).toBe(true)
    }) 

    it('starts wth Genesis Block',()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    })

    it('add new block to chain',()=>{
        const newData = "Temp New Data"
        blockchain.addBlock({data : newData})
        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData)
    })
})