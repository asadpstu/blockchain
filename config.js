const INITIAL_DIFFICULTY = 3;


const GENESIS_DATA = {
    timeStamp : 1,
    lastHash : 'First-block-last-Hash',
    hash : 'First-block-hash',
    difficulty : INITIAL_DIFFICULTY,
    nonce : 0,
    data : [],
}

module.exports = { GENESIS_DATA }