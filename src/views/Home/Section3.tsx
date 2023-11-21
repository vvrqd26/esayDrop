import dotPng from "../../assets/dot.png";
import dotActivePng from "../../assets/dot_active.png";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import downPng from "../../assets/down.png";
import { BuyButton } from "../../components/BuyButton";

interface CardProps {
  title: string;
  slogen: string;
  price: string;
  originalPrice: string;
  priceChange: string;
  equities: Array<string>;
  isActive?: boolean;
  onClick?: () => void;
}
const Card = ({
  title,
  slogen,
  price,
  originalPrice,
  priceChange,
  equities,
  isActive = false,
  onClick,
}: CardProps) => {
  const parent = useRef(null);
  useEffect(() => {
    if (parent.current == null) return;
    autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="box-content flex h-[66.36rem] flex-col items-center justify-center">
      <div
        ref={parent}
        className={
          "mx-[0.7rem] my-6  flex w-[33rem] flex-col justify-between rounded-3xl border border-[#EDF8FF] bg-white p-14 shadow-card" +
          (isActive
            ? " h-[66.36rem] outline outline-4 outline-link"
            : " h-[57.9rem]")
        }
        onClick={onClick}
      >
        <div>
          <h1 className="text-4xl">{title}</h1>
          <h2 className="mt-6 text-xl">{slogen}</h2>
          <div
            className={
              "mx-auto my-[2.8rem] flex h-[9rem] w-[26rem] flex-col p-5 text-left" +
              (isActive && priceChange != "0"
                ? " justify-around border border-[#5990BE]"
                : " justify-end")
            }
          >
            {isActive && priceChange != "0" ? (
              <div className="flex justify-between">
                <s className="text-[#828282]">{originalPrice}</s>
                <div className="flex items-center">
                  <div className="text-green-400">{priceChange}</div>
                  <img src={downPng} className="ml-2 w-[0.71rem]" alt="" />
                </div>
              </div>
            ) : (
              ""
            )}
            <div>
              <span className="text-4xl font-medium text-link">{price}</span>
              {priceChange == "0" || isActive ? "" : <s>{originalPrice}</s>}
            </div>
          </div>
          <div className="h-[2px] bg-gradient-to-r from-black/0 via-black to-black/0"></div>

          <div className="mt-11 text-left">
            <div className="mb-11">本套餐包含</div>
            {equities.map((item) => {
              return (
                <p className=" flex items-center leading-loose">
                  <img
                    src={isActive ? dotActivePng : dotPng}
                    alt=""
                    className="w-[1.43rem]"
                  />{" "}
                  &nbsp;{item}
                </p>
              );
            })}
          </div>
        </div>
        {price != "免费" ? (
          <div className="mt-8">
            <BuyButton />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const items: CardProps[] = [
  {
    title: "Base-基础版",
    slogen: "适合初次接触人群",
    price: "免费",
    originalPrice: "免费",
    priceChange: "0",
    equities: [
      "最多5个钱包交互体验",
      "精准全面的数据",
      "最新空投资讯",
      "最多3次查询数据次数",
    ],
  },
  {
    title: "Pro-进阶版",
    slogen: "适合深度体验人群",
    price: "0.065ETH/月",
    originalPrice: "原价 0.1 ETH/月",
    priceChange: "35%",
    equities: [
      "最多100个钱包体验/交互",
      "精准全面的数据",
      "最新空投资讯",
      "最多100次查询数据次数",
      "自动化交互脚本",
      "交易所批量提币",
    ],
  },
  {
    title: "Pro-高阶版",
    slogen: "适合长期用户",
    price: "0.9ETH/年",
    originalPrice: "原价 1 ETH/年",
    priceChange: "10%",
    equities: [
      "最多500个钱包体验/交互",
      "精准全面的数据",
      "最新空投资讯",
      "最多5000次查询数据次数",
      "自动化交互脚本",
      "交易所批量提币",
      "每月一次  1 : 1 ( 信息咨询、空投教程)",
      "自动化交互活跃功能",
    ],
  },
  {
    title: "终极版",
    slogen: "适合商业或团队",
    price: "3.2ETH/永久",
    originalPrice: "原价 4ETH/永久",
    priceChange: "20%",
    equities: [
      "最多1000个钱包体验/交互",
      "精准全面的数据",
      "最新空投资讯",
      "最多2000/月次查询数据次数",
      "自动化交互脚本",
      "交易所批量提币",
      "每月一次  1 : 1 ( 信息咨询、空投教程、项目研报)",
      "定制化机器人服务",
      "团队个人指导",
    ],
  },
];

export const Section3 = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-bg py-28 text-center">
      <h1 className=" text-5xl font-medium">选择你的EasyDrop套餐</h1>
      <h2 className="my-14 text-3xl">
        选择适合你的套餐，获得更多利润并节省大量时间
      </h2>

      <div className=" mx-auto flex flex-wrap items-center justify-center">
        {items.map((item, index) => {
          return (
            <Card
              key={item.title}
              {...item}
              isActive={index == active}
              onClick={() => setActive(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
