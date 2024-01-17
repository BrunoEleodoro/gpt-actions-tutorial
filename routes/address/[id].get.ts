import { ethers, formatEther } from 'ethers';

export default eventHandler(async (event) => {
  const address = event.context.params.id
  const provider = ethers.getDefaultProvider('homestead');
  const balance = await provider.getBalance(address);
  return { address, balanceFormatted: formatEther(balance) }
})
