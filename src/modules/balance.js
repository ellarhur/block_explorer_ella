import { createClient } from './explorer.js';
import { formatEther } from 'https://esm.sh/viem';

const publicClient = createClient();

async function getBalance(address) {
    try {
        const balance = await publicClient.getBalance({ address });
        return formatEther(balance);
    } catch (error) {
        throw new Error(`Fel vid hämtning av saldo: ${error.message}`);
    }
}

function handleBalanceForm() {
    const form = document.getElementById('balanceForm');
    const resultElement = document.getElementById('result');

    if (!form || !resultElement) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const address = document.getElementById('address').value;
        
        try {
            const balance = await getBalance(address);
            
            resultElement.innerHTML = `
                <div class="balance-result">
                    <strong>Adress:</strong> ${address.slice(0, 6)}...${address.slice(-4)}<br>
                    <strong>Saldo:</strong> ${Number(balance).toFixed(4)} ETH
                </div>
            `;
            resultElement.style.color = '#70142a';
            
            form.reset();
        } catch (error) {
            resultElement.innerHTML = `Ett fel uppstod: ${error.message}`;
            resultElement.style.color = 'red';
        }
    });
}

document.addEventListener('DOMContentLoaded', handleBalanceForm);

export { getBalance, handleBalanceForm };
