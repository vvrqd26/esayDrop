import { useContractReads } from "wagmi";
import { useVipContractAddress } from "./address";
import Vip from "../abis/Vip";
import { useEffect, useMemo, useState } from "react";
import { formatUnits } from "viem";

export const usePrices = () => {
  const vipContractAddress = useVipContractAddress();

  const res = useContractReads({
    contracts: [
      {
        abi: Vip,
        address: vipContractAddress,
        functionName: "tierMap",
        args: [1n],
      },
      {
        abi: Vip,
        address: vipContractAddress,
        functionName: "tierMap",
        args: [2n],
      },
      {
        abi: Vip,
        address: vipContractAddress,
        functionName: "tierMap",
        args: [3n],
      },
    ],
  });
  const prices = useMemo(() => {
    if (!res.data) return [];
    return [
      {
        title: "月卡:30天",
        price: `${formatUnits(res.data[0].result?.[0] ?? 0n, 18)}ETH`,
        time: "30天",
        originPrice: "0.1ETH",
        priceRaw: res.data[0].result?.[0],
        id: 1,
      },
      {
        title: "年卡:365天",
        price: `${formatUnits(res.data[1].result?.[0] ?? 0n, 18)}ETH`,
        time: "365天",
        originPrice: "1ETH",
        priceRaw: res.data[1].result?.[0],
        id: 2,
      },
      {
        title: "终身卡:永久",
        price: `${formatUnits(res.data[2].result?.[0] ?? 0n, 18)}ETH`,
        time: "365天",
        originPrice: "4ETH",
        priceRaw: res.data[2].result?.[0],
        id: 3,
      },
    ];
  }, [res.data]);
  // const [prices, setPrices] = useState<
  //   Array<{
  //     title: string;
  //     price: string;
  //     originPrice: string;
  //     time: string;
  //     id: number;
  //   }>
  // >([]);

  // useEffect(() => {
  //   if (res.data) {
  //     setPrices();
  //   }
  // }, [res]);

  return prices;
};
