import { http, createConfig } from "wagmi";
// import { mainnet, sepolia } from 'wagmi/chains'
import { injected } from "wagmi/connectors";

import { type Chain } from "viem";

export const neoXTestnet = {
  id: 12227332,
  name: "neoX Testnet",
  nativeCurrency: {
    name: "Gas",
    symbol: "GAS",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://neoxt4seed1.ngd.network"] },
  },
  blockExplorers: {
    default: {
      name: "NEOX Chain Explorer",
      url: "https://xt4scan.ngd.network/",
    },
  },
} as const satisfies Chain;

export const config = createConfig({
  chains: [neoXTestnet],
  // chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [neoXTestnet.id]: http(),
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
