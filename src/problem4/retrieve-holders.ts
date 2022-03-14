import { ethers } from "ethers";

// Connecting to Ethereum: RPC
const provider = new ethers.providers.JsonRpcBatchProvider(
    "https://bsc-dataseed.binance.org/"
);

const daiAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

// Get the account balance
const daiAbi = ["function balanceOf(address) view returns (uint)"];

const addresses = [
    '0x123d475e13aa54a43a7421d94caa4459da021c77',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xfe808b079187cc460f47374580f5fb47c82b87a5'
];

// Connecting to the DAI Contract
const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

for (const address of addresses) {
    daiContract
    .balanceOf(address)
    .then((balance: number) =>
        console.log(address + " " + balance)
    );
}