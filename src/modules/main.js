import { handleTransactionForm } from './create-transaction.js';
import { getLatestBlocks } from './blocks.js';
import { handleBalanceForm } from './balance.js';


// Här ska allt importeras och se till att det visas på sidan.


document.addEventListener('DOMContentLoaded', () => {
    handleTransactionForm();

    handleBalanceForm();

    const blocksContainer = document.getElementById('blocks-container');
    if (blocksContainer) {
        displayBlocks();
    }
});

async function displayBlocks() {
    const blocksContainer = document.getElementById('blocks-container');
    try {
        const blocks = await getLatestBlocks();
        blocksContainer.innerHTML = blocks.map(block => `
            <li>
                <strong>Block ${block.number.toString()}</strong>
                <p>Hash: ${block.hash.slice(0, 10)}...${block.hash.slice(-8)}</p>
                <p>Timestamp: ${new Date(Number(block.timestamp) * 1000).toLocaleString()}</p>
                <p>Transactions: ${block.transactions.length}</p>
            </li>
        `).join('');
    } catch (error) {
        blocksContainer.innerHTML = `<p style="color: red;">Fel: ${error.message}</p>`;
    }
}