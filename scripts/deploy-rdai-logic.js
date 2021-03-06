module.exports = async function (callback) {
    try {
        global.web3 = web3;

        let network = await web3.eth.net.getNetworkType();
        console.log("Current network:", network);

        const { web3tx } = require("@decentral.ee/web3-test-helpers");
        const RToken = artifacts.require("rDAI");
        const rDaiLogic = await web3tx(RToken.new, "RToken.new")();
        console.log("rDaiLogic deployed at: ", rDaiLogic.address);

        callback();
    } catch (err) {
        callback(err);
    }
};
