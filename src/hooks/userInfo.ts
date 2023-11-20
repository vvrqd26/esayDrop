import { useAccount, useContractRead } from "wagmi";
import Vip from "../abis/Vip";
import { useVipContractAddress } from "./address";
import { useEffect, useMemo } from "react";

export const useUserInfo = () => {
  const address = useVipContractAddress();
  const account = useAccount();
  const res = useContractRead({
    abi: Vip,
    address: address,
    functionName: "getUserInfo",
    args: [account.address!],
  });

  const userInfo = useMemo(() => {
    if (res.data) {
      return {
        tier: res.data[0],
        exp: res.data[1],
        tierName: ["月卡", "年卡", "终身卡"][Number(res.data[0] - 1n)],
      };
    }
    return null;
  }, [res.data, account]);

  return userInfo;
};
