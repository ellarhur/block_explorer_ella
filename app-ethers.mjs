import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('http:localhost:8545');
console.log('Provider', provider);
const block = await provider.getBlockNumber();
console.log(block);