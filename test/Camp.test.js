const Camp = artifacts.require("Camp");

contract("Camp", (accounts) => {
  before(async () => {
    camp = await Camp.deployed();
  });

  it("gives the owner of the token 1M tokens", async () => {
    let balance = await camp.balanceOf(accounts[0]);
    console.log(web3.utils.fromWei(balance, "ether"));
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      1000000,
      "Balance should be 1M tokens for contract creator"
    );
  });

  it("can transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("1000", "ether");
    await camp.transfer(accounts[1], amount, { from: accounts[0] });

    let balance = await camp.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      1000,
      "Balance should be 1K tokens for contract creator"
    );
  });
});
