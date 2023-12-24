require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.2",
      },
      {
        version: "0.8.20",
        settings: {},
      },
    ],
  }
};
