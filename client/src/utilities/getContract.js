import ContractAbi from "./newsFeed.json";
import { ethers } from "ethers";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner(
    "0x9cc68505B2fa69a936E032B12c654E5bA8b52bcE"
  );
  let contract = new ethers.Contract(
    "0x8E2f66a48099080fD42fA5774C25c89c2d4aC0C3",
    ContractAbi.abi,
    signer
  );
  return contract;
}
