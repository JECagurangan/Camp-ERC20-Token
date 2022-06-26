const Camp = artifacts.require("Camp");

module.exports = function (deployer) {
  deployer.deploy(Camp, 1000000);
};
