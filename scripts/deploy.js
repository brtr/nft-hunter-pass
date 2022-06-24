// npx hardhat run scripts/deploy.js --network rinkeby
// npx hardhat verify --network rinkeby contract_address
const hre = require("hardhat");
async function main() {
    let NFT = await hre.ethers.getContractFactory("NftHunterPass");
    const hunter_pass = await NFT.deploy();   //CONTRACT INFO
    await hunter_pass.deployed();
    console.log("Nft hunter pass Contract deployed to:", hunter_pass.address);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
