import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from "wagmi";


import {
    mainnet,
    sepolia,
} from "wagmi/chains";
 const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "391461a9742d1ea9b20b5e684d6e22e2";
 const metadata = {
    name: "Next Starter Template",
    description: "A Next.js starter template with Web3Modal v3 + Wagmi",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
 const chains: any = [
    mainnet,
    sepolia
]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
createWeb3Modal({ wagmiConfig, projectId });

export default function App({ children }: any) {
    return (
        <WagmiProvider config={wagmiConfig}>
            {children}
        </WagmiProvider>
    );
}