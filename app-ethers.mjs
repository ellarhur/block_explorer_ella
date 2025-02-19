import { ethers, formatEther, parseEther } from 'ethers';

const provider = new ethers.JsonRpcProvider('http:localhost:8545');

const block = await provider.getBlockNumber();


let balance = await provider.getBalance('0x580c2385A9923Ca51791aDeDD4B500709fE79B94');
console.log("Ether", formatEther(balance));

let transactionList = await provider.getTransactionCount('0x580c2385A9923Ca51791aDeDD4B500709fE79B94');


console.log("Antal transaktioner:", transactionList);

const signer = await provider.getSigner('0x9b3290b68518AB8D6308B293305985cAfE4245aB');

const trx = await signer.sendTransaction({
    to: '0x32D6437c7124eb69E5f7DF31203A113C9FBCb655',
    value: parseEther('1'),
});

const receipt = await trx.wait();

console.log('Kvittens', receipt)

balance = await provider.getBalance('0x9b3290b68518AB8D6308B293305985cAfE4245aB');
console.log("Avsändarens saldo", formatEther(balance));

balance = await provider.getBalance("0x32D6437c7124eb69E5f7DF31203A113C9FBCb655");
console.log("Mottagarens saldo", formatEther(balance));


transactionList = await provider.getTransactionCount('0x580c2385A9923Ca51791aDeDD4B500709fE79B94');


console.log("Antal transaktioner:", transactionList);
