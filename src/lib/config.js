const mode = "mainnet";
const status = "production";

export default {
    rpcUrl: mode === "mainnet" && status === "production" ? "https://api.openarena.cc" : "http://localhost:443",
    indexerUrl: mode === "mainnet" && status === "production" ? "http://localhost:444" : "http://localhost:444",
    chainId: mode === "mainnet"  ? "0x9b4" : "",
    ethRpcUrl: mode === "mainnet" ? "https://rpc-mainnet.u2u.xyz" : "",
    chainName: mode === "mainnet" ? "U2U Mainnet" : "U2U Testnet",
    nativeCurrency: {
        name: "U2U",
        symbol: "U2U",
        decimals: 18
    },
    blockExplorerUrls: "",
    site: "https://openarena.cc",
    twitter: "",
    discord: ""
}

