const Block = require("./block");

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
})