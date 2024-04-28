
import {
    mainnet,
    sepolia,
} from "wagmi/chains";
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "391461a9742d1ea9b20b5e684d6e22e2";
export const metadata = {
    name: "Next Starter Template",
    description: "A Next.js starter template with Web3Modal v3 + Wagmi",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
export const chains: any = [
    mainnet,
    sepolia
]