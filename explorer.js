import {
  createPublicClient,
  createWalletClient
  http,
} from 'http://esm.sh/viem';

import { localhost } from 'http://esm.sh/viem/chains';

export const createClient = () => {
  const client = createPublicClient({
    chain: localhost,
    transport: http(http:localhost:7545'),
    )}; 
    return client;
  };

  export const createWallet = () => {
    const wallet = createWalletClient ({
      chain: localhost,
      transport: http('http://localhost:7545'),
    });
    return wallet;
  }