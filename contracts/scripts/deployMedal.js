const hre = require("hardhat");

async function main() {

  const uri = "Wagmi Club";
  const gasLimit = 100_000_00n;

  const medals = await hre.ethers.deployContract("Medal", [uri], {
    gasLimit: gasLimit
  });

  await medals.waitForDeployment();

  console.log( `deployed to ${medals.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deployed to 