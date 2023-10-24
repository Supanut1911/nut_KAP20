import { ethers } from "hardhat";

async function main() {
  const nutToken = await ethers.deployContract("NUTToken", [
    "0x0B80357691c27c0c9Ba25123F832190C0b86aCA1",
    "0x5bcDFb971d6622eEf0bFcAf7EcB6120a822B1Cd3",
    "0xF2B8821FA1e5cE47A99bD67c9f9E1724e48FD680",
    4,
  ]);

  const myToken = await nutToken.waitForDeployment();

  console.log(myToken);

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
