async function getTransactionHistory() {
    try {
        const blockCount = await publicClient.getBlockNumber();
        const transactions = [];
        
        // Hämta de senaste 10 blocken
        for (let i = 0; i <= 10; i++) {
            const block = await publicClient.getBlock({
                blockNumber: blockCount - BigInt(i)
            });
            transactions.push(...block.transactions);
        }
        
        return transactions;
    } catch (error) {
        console.error('Fel vid hämtning av transaktioner:', error);
        throw error;
    }
  }

  const transactions = await getTransactionHistory();
  console.log(transactions);
  
  export { getTransactionHistory };