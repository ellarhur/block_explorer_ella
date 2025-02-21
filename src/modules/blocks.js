import { createClient } from './explorer.js';

const publicClient = createClient();

async function getLatestBlocks(count = 10) {
    try {
        const latestBlockNumber = await publicClient.getBlockNumber();
        const blocks = [];

        for (let i = 0; i < count; i++) {
            const blockNumber = latestBlockNumber - BigInt(i);
            if (blockNumber < 0n) break;

            const block = await publicClient.getBlock({
                blockNumber: blockNumber
            });
            blocks.push(block);
        }

        return blocks;
    } catch (error) {
        throw new Error(`Fel vid hämtning av block: ${error.message}`);
    }
}

export { getLatestBlocks };