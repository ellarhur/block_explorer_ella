document.addEventListener('DOMContentLoaded', () => {
  const transactionForm = document.getElementById('transactionForm');
  const resultElement = document.getElementById('result');

  transactionForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fromAddress = document.getElementById('from').value;
      const toAddress = document.getElementById('to').value;
      const amount = document.getElementById('value').value;

      try {
          const transaction = await walletClient.sendTransaction({
              account: fromAddress,
              to: toAddress,
              value: parseEther(amount)
          });
          
          // Visa bekräftelse för användaren
          resultElement.textContent = `Transaktion lyckades! Hash: ${transaction}`;
          resultElement.style.color = 'green';
          
          // Återställ formuläret
          transactionForm.reset();
          
      } catch (error) {
          // Visa felmeddelande för användaren
          resultElement.textContent = `Fel: ${error.message}`;
          resultElement.style.color = 'red';
      }
  });
});
const txHash = await sendTransaction(fromAddress, toAddress, amount);

export { sendTransaction };
console.log("hej");