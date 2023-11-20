import {
  useAccount,
  useBalance,
  useContractReads,
  useContractWrite,
} from "wagmi";
import Vip from "../../../abis/Vip";
import { useVipContractAddress } from "../../../hooks/address";
import { useMemo, useState } from "react";
import { usePrices } from "../../../hooks/prices";
import { formatEther } from "viem";
import { useUserInfo } from "../../../hooks/userInfo";

interface IProps {
  setStep: (step: number) => void;
  isUp?: boolean;
}
export const Step2 = ({ setStep, isUp }: IProps) => {
  const prices = usePrices();
  const userInfo = useUserInfo();
  const filterPrices = useMemo(() => {
    if (prices.length > 0 && userInfo) {
      return prices.filter((price) => {
        if (isUp) {
          return price.id > userInfo.tier;
        } else {
          return price.id === Number(userInfo.tier);
        }
      });
    }
    return [];
  }, [prices, isUp, userInfo]);
  const [selected, setSelected] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const account = useAccount();

  const balance = useBalance({
    address: account.address,
  });
  const dep = useContractWrite({
    abi: Vip,
    address: useVipContractAddress(),
    functionName: "deposit",
  });

  const buy = async () => {
    try {
      setIsLoading(true);
      console.log(filterPrices[selected].priceRaw, "value");
      await dep.writeAsync({
        args: [BigInt(filterPrices[selected].id)],
        value: filterPrices[selected].priceRaw,
      });
      setStep(0);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="mb-16 text-center text-4xl font-medium">购买会员</h1>

      {filterPrices.map((item, index) => {
        return (
          <div
            className={
              " mt-2 cursor-pointer rounded-md border-4 p-8 " +
              (selected === index ? "border-blue" : "border-gray-400 ")
            }
            onClick={() => setSelected(index)}
            key={item.title}
          >
            <div className="text-[1.86rem] font-medium">{item.title}</div>
            <div className="mt-8">
              <s className="text-[1.29rem] text-gray-500">{item.originPrice}</s>
              <span className="ml-1 text-[1.86rem] text-orange">
                {item.price}
              </span>
            </div>
          </div>
        );
      })}

      <div className="mt-[2.5rem] text-center text-[1.43rem] text-[#676767]">
        余额：{formatEther(balance.data?.value ?? 0n)}&nbsp;ETH
      </div>

      <div className="mt-[1.79rem]">
        <div
          onClick={() => buy()}
          className="relative flex h-[3.57rem] w-[25.36rem;] cursor-pointer flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#84D0FF] to-blue text-white/90"
        >
          <div className=" flex  items-center">
            <i
              className={
                "iconfont icon-loading animate-spin text-white " +
                (isLoading ? "block" : "hidden")
              }
            ></i>
            &nbsp; 确认购买
          </div>
          {isLoading ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={"absolute inset-0 bg-gray-400/30"}
            ></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
