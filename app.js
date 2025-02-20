import { ethers, formatEther } from 'https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js';

const currentBalance = document.querySelector('#currentBalance');
let provider;

const initApp = () => {
    console.log('App is running');
    const provider = new ethers.JsonRpcProvider('http://localhost:7545');
    console.log(provider);
    getCurrentBalance();
};

const getCurrentBalance = async () => {
    const balance = await provider.getBalance('0x350B210ffbA2173c58BB866E307fF10C1e757A79');

    currentBalance.innerHTML = `Aktuellt saldo ${formatEther(balance)}`;
}

const listAllBlocks = async () => {
    const numberOfBlocks = await provider.getBlockNumber();
    console.log(numberOfBlocks)
    for (let i = 0; i <= numberOfBlocks; i ++){
        let block = await provider.getBlock(i);
        const blockElem = document.createElement("span")
    }
};

document.addEventListener('DOMContentLoaded', initApp);

