
export enum Network {
  BEP20 = 'BEP20 (Binance Smart Chain)',
  TRC20 = 'TRC20 (Tron Network)',
  ERC20 = 'ERC20 (Ethereum Network)',
  SOL = 'Solana Network',
  BTC = 'Bitcoin Network',
  ARB = 'Arbitrum One',
  APTOS = 'Aptos Network'
}

export interface Package {
  id: string;
  price: number;
  amount: number;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Exchange {
  name: string;
  logo: string;
}
