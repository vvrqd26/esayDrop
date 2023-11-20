import { useChainId } from "wagmi";

export const useVipContractAddress = () => {
  const chainId = useChainId();
  return ({ "421613": "0x9d00526DCC0FAd1923167381766ae53b8fC8C538" }[chainId] ??
    "0x9d00526DCC0FAd1923167381766ae53b8fC8C538") as `0x${string}`;
};
