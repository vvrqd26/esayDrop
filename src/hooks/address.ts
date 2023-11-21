import { useAccount, useChainId } from "wagmi";

export const useVipContractAddress = () => {
  const chainId = useChainId();
  return ({ "421613": "0x9d00526DCC0FAd1923167381766ae53b8fC8C538" }[chainId] ??
    "0x9d00526DCC0FAd1923167381766ae53b8fC8C538") as `0x${string}`;
};
export const useRelationContractAddress = () => {
  const chainId = useChainId();
  return ({ "421613": "0xbe990f96eb301809a9f7abb384f43a0395187f2d" }[chainId] ??
    "0xbe990f96eb301809a9f7abb384f43a0395187f2d") as `0x${string}`;
};

export const useInvateURL = () => {
  const account = useAccount();

  return `${window.location.protocol}//${window.location.host}/?invate=${account.address}`;
};
