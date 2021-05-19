const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const { cryptoHash } = require("./cryptoHash");

describe('Block',()=>{
    const timeStamp = 'a-data';
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ["Blockchain",'Data']
    const nonce = 1;
    const difficulty = 1;
    const block = new Block({
        timeStamp : timeStamp,
        lastHash : lastHash,
        hash : hash,
        data : data,
        nonce : nonce,
        difficulty : difficulty
    });
    
    it('has a  timestap,lasthash,hash,data property',()=>{
        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
        expect(block.difficulty).toEqual(difficulty);

    })

    describe('genesis()',() =>{
        const genesisBlock = Block.genesis();

        it('returns a Block',()=>{
            expect(genesisBlock instanceof Block).toBe(true)
        })

        it('returns the genesis data',()=>{
            expect(genesisBlock).toEqual(GENESIS_DATA)
        })
    })

    describe('mineBlock()',() =>{
        const lastBlock = Block.genesis()
        const data = "Any Data";
        const minedBlock = Block.mineBlock({lastBlock,data});

        it('returns a block instance',()=>{
            expect(minedBlock instanceof Block).toBe(true);
        })
        it('sets the `lastHash` to be the `hash` of the lastBlock',()=>{
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        })
        it('set `data`',()=>{
            expect(minedBlock.data).toEqual(data);
        })
        it('set the `timestamp`',()=>{
            expect(minedBlock.timeStamp).not.toEqual(undefined);
        })

        it('creates a proper `sha 256` based input',()=>{
           expect(minedBlock.hash).toEqual(cryptoHash(
               minedBlock.timeStamp,
               minedBlock.nonce,
               minedBlock.difficulty,
               lastBlock.hash,
               data
               )
            )  
        })
         
        it(`it sets 'hash' that matches difficulty criteria`,()=>{
           expect(minedBlock.hash.substring(0,minedBlock.difficulty))
             .toEqual('0'.repeat(minedBlock.difficulty));  
        })


    })
})