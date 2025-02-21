import { parseEther } from 'https://esm.sh/viem';
import { createWallet } from './explorer.js';

const walletClient = createWallet();

async function sendTransaction(fromAddress, toAddress, amount) {
    try {
        const hash = await walletClient.sendTransaction({
            account: fromAddress,
            to: toAddress,
            value: parseEther(amount.toString())
        });
        return hash;
    } catch (error) {
        throw new Error(`Fel vid transaktion: ${error.message}`);
    }
}

function handleTransactionForm() {
    const form = document.getElementById('transactionForm');
    const transactionsList = document.getElementById('transactions');

    if (!form || !transactionsList) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const fromAddress = document.getElementById('from').value;
        const toAddress = document.getElementById('to').value;
        const amount = document.getElementById('value').value;

        try {
            const hash = await sendTransaction(fromAddress, toAddress, amount);
            
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Från:</strong> ${fromAddress.slice(0, 6)}...${fromAddress.slice(-4)} 
                <strong>Till:</strong> ${toAddress.slice(0, 6)}...${toAddress.slice(-4)} 
                <strong>Belopp:</strong> ${amount} ETH 
                <strong>Hash:</strong> ${hash.slice(0, 10)}...
            `;
            
            transactionsList.insertBefore(listItem, transactionsList.firstChild);
            form.reset();

        } catch (error) {
            console.error('Transaktionsfel:', error);
            alert(`Ett fel uppstod: ${error.message}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', handleTransactionForm);

export { sendTransaction, handleTransactionForm };