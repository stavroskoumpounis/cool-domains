const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("keftes");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    // // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
    // let txn = await domainContract.register("magician",  {value: hre.ethers.utils.parseEther('0.05')});
    // await txn.wait();
    // console.log("Minted domain magician.keftes");
  
    // txn = await domainContract.setRecord("magician", "Am I a magician or a keftes??");
    // await txn.wait();
    // console.log("Set record for magician.keftes");
  
    // const address = await domainContract.getAddress("magician");
    // console.log("Owner of domain magician:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();