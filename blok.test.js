const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const { cryptoHash } = require("./cryptoHash");

describe('Block',()=>{
    const timeStamp = 'a-data';
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ["Blockchain",'Data']
    const block = new Block({
        timeStamp : timeStamp,
        lastHash : lastHash,
        hash : hash,
        data : data
    });

    it('has a  timestap,lasthash,hash,data property',()=>{
        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);

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
           expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timeStamp,lastBlock.hash,data))  
        })

    })
})