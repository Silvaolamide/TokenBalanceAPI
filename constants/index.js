export const POLLING_INTERVAL = 12000;

export const SupportedChainId = {
  BINANCE: 56,
  BINANCETEST: 97,
  // MAINNET: 1,
  // ROPSTEN: 3,
  // RINKEBY: 4,
  // GOERLI: 5,
  // KOVAN: 6,
  // POLYGON: 137,
  // POLYGONTEST: 80001,
};

export const ALL_SUPPORTED_CHAIN_IDS = [
  SupportedChainId.BINANCETEST,
  SupportedChainId.BINANCE,
  // SupportedChainId.MAINNET,
  // SupportedChainId.ROPSTEN,
  // SupportedChainId.RINKEBY,
  // SupportedChainId.GOERLI,
  // SupportedChainId.KOVAN,
  // SupportedChainId.POLYGON,

  // SupportedChainId.POLYGONTEST,
];

export const RPC_URLS = {
  56: 'https://bsc-dataseed.binance.org/',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export const NETWORK_DATA = {
  56: {
    name: 'Binance Smart Chain',
    chainHexId: '0x38',
    symbol: 'BNB',
    decimal: 18,
    blockExplorer: 'https://testnet.bscscan.com',
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
  97: {
    name: 'Binance Chain -  Tesnet',
    chainHexId: '0x61',
    symbol: 'BNB',
    decimal: 18,
    blockExplorer: 'https://testnet.bscscan.com',
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
};
