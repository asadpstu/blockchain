const { cryptoHash } = require('./cryptoHash')

describe('cryptoHash()',()=>{
    it('it generates a SHA 256 Hashed string',()=>{
        expect(cryptoHash('hashStr')).toEqual('d7dd82e26e6cec2fce87b9258bcb3a9c7a37228cea59d330ed0a115aa1d98735');
    })
})