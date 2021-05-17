const Blockchain = require("./blockchain")
const Block = require("./block")

describe("Blockchain",()=>{
    let blockchain;
    beforeEach(()=>{
        blockchain = new Blockchain();
    })
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

    describe("isValidChain()",()=>{
        describe("when the block does not start with genesis block",()=>{
           it("return false",()=>{
             blockchain.chain[0] = { data : "fake-gennesis"}
             expect(Blockchain.isValidChain(blockchain.chain)).toBe(false)
           }) 
        })

        describe("when the block start with genesis block and multiple  block",()=>{
            beforeEach(()=>{
                blockchain.addBlock({data : 'Test-1'})
                blockchain.addBlock({data : 'Test-2'})
                blockchain.addBlock({data : 'Test-3'})
            })
            describe('and a lastHash referenece changed',()=>{
               it('return false',()=>{
                   blockchain.chain[2].lastHash = 'broken-lastHash';
                   expect(Blockchain.isValidChain(blockchain.chain)).toBe(false)
               })
           }) 

           describe("and the chain contains a block with invalid field",()=>{
               it('return false',()=>{
                blockchain.chain[2].data = 'Invalid Data'; 
                expect(Blockchain.isValidChain(blockchain.chain)).toBe(false)
               })
           })

           describe("and the chain doesn't contains invalid blocks",()=>{
            it('return false',()=>{
             expect(Blockchain.isValidChain(blockchain.chain)).toBe(true)
            })
        })
        })
    })
})