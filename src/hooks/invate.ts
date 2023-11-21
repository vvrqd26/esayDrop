import { useAccount, useContractRead } from "wagmi";
import Relation from "../abis/Relation";
import { useRelationContractAddress } from "./address";
import { useMemo } from "react";
import { useLocation } from "react-router";

export const useInvate = () => {
  const account = useAccount();
  const invate = useContractRead({
    abi: Relation,
    address: useRelationContractAddress(),
    functionName: "getInviter",
    args: [account.address ?? "0x"],
  });
  return useMemo(() => {
    return invate.data;
  }, [invate]);
};
export const useInvateFromURL = () => {
  return useMemo(() => {
    const url = new URL(window.location.toString());
    const invate = url.searchParams.get("invate");
    if (invate) {
      return invate;
    }
    return null;
  }, [window.location.href]);
};
