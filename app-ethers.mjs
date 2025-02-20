import { ethers, formatEther, parseEther } from 'ethers';

const provider = new ethers.JsonRpcProvider('http:localhost:7545');

let block = await provider.getBlockNumber();


let balance = await provider.getBalance('0x350B210ffbA2173c58BB866E307fF10C1e757A79');
console.log("Ether", formatEther(balance));

let transactionList = await provider.getTransactionCount('0x350B210ffbA2173c58BB866E307fF10C1e757A79');


console.log("Antal transaktioner:", transactionList);

const signer = await provider.getSigner('0x350B210ffbA2173c58BB866E307fF10C1e757A79');

const trx = await signer.sendTransaction({
    to: '0xFE452AB4704654D25b3E15D6cC54F108357F361D',
    value: parseEther('1'),
});

const receipt = await trx.wait();

console.log('Kvittens', receipt)

balance = await provider.getBalance('0x350B210ffbA2173c58BB866E307fF10C1e757A79');
console.log("Avsändarens saldo", formatEther(balance));

balance = await provider.getBalance("0xFE452AB4704654D25b3E15D6cC54F108357F361D");
console.log("Mottagarens saldo", formatEther(balance));


transactionList = await provider.getTransactionCount('0x350B210ffbA2173c58BB866E307fF10C1e757A79');


console.log("Antal transaktioner:", transactionList);

let blockNumber = await provider.getBlockNumber();
console.log("Aktuellt block", blockNumber);

block = await provider.getBlock('0x3d898747f490ae1cc987f6e94a73e9e6595d9c03e449a019a4cb206933ab4751');
console.log('Block info', block)

// Loopa igenom alla block som finns just nu. 

const blocks = await provider.getBlockNumber();
for(let i = 0; i <= blocks; i++){
    let b = await provider.getBlock(i);
    let transactions = b.transactions
    console.log(`Block[${i}] - Mined On ${new Date(b.timestamp * 1000
    ).toLocaleString()} - Gas Used ${b.gasUsed}`);

    for(let t of transactions) {
        const trx = await b.getTransaction(t);
        console.log(`Till: ${trx.to} Från: ${trx.from} Value: ${trx.value}`);
    }

}