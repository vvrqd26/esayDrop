import { useEffect, useRef, useState } from "react";
import jiaPng from "../../assets/+.png";
import jianPng from "../../assets/jian.png";
import autoAnimate from "@formkit/auto-animate";

const items = [
  {
    q: "什么是Easydrop？",
    a: "Easydrop是一个可以提升您效率的空投百宝箱，主要包含自动交互机器人、地址交互数据批量查询、交易所批量提币、丰富的防女巫策略和最新空投资讯库等等，并且有技术强劲和经验丰富的投研团队为你保驾护航。",
  },
  {
    q: "我为什么要使用Easydrop？",
    a: "以Arbitrum空投为例，手动进行交互1个账号获得1000+u的可观收益，但会花费您几个小时的时间。但如果您使用Easydrop，仅需要5分钟，500个钱包就会采用不同的策略自动并行运行完成，这将会充分放大您的收益。",
  },
  {
    q: "Easydrop会保留钱包私钥吗？",
    a: "不会。钱包私钥会安全地存储在您的浏览器中，并采用了加密与混淆算法双重保障，因此我们没有权限访问它。我们的愿景是打造一款安全并能提升用户效率的工具，最终与我们的用户实现双赢局面。",
  },
  {
    q: "我如何使用Easydrop自动交互机器人？",
    a: "您仅需要输入交互的各种参数，然后点击开始，剩下的交给时间。（具体参数设置教程将在购买后提供）",
  },
  {
    q: "Easydrop如何防女巫？",
    a: "Easydrop投研团队作为经验丰富的空投猎人，为机器人添加了丰富的交互规则，可以做到模拟真人操作，形成随机的链上交互记录。",
  },
  {
    q: "地址交互数据批量查询会记录地址数据吗？",
    a: "不会。地址信息跟钱包私钥一样会安全地存储在您的浏览器中，并采用了加密与混淆算法双重保障，因此任何人都无法获取。",
  },
  {
    q: "会支持其他空投吗？",
    a: "会的。Easydrop团队内部会优先选择性价比高的项目开发并更新功能，如您已经购买永久会员，可以在discord中联系团队并提出诉求，我们将优先为您处理。",
  },
  {
    q: "是否支持退款？",
    a: "不支持。Easydrop会员一经出售恕不退换。",
  },
  {
    q: "订阅价格是固定的吗？",
    a: "不固定。随着产品功能的更新和成本增加，订阅价格会逐渐增加。",
  },
  {
    q: "能保证拿到空投吗？",
    a: "不保证。空投资格受多种因素的影响，包括但不限于项目或组织规定的条款和条件。Easydrop团队会做出最优决策来提高您获胜的概率，用户需自行评估自己的风险承受能力，我们不对您的投资行为或决策承担任何责任。",
  },
];
const Item = ({ q, a }: { a: string; q: string }) => {
  const parent = useRef<HTMLElement>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (parent.current == null) return;
    autoAnimate(parent.current);
  }, [parent]);

  return (
    <div
      key={a}
      onClick={() => setOpen((open) => !open)}
      className="mb-[2.36rem]"
      ref={parent as any}
    >
      <div className="flex items-center justify-between text-[1.86rem] text-[#243038]">
        {q}
        {open}
        <img className="w-[2.21rem]" src={open ? jianPng : jiaPng} alt="" />
      </div>
      {open ? (
        <div
          className={"mt-4 overflow-y-hidden text-[1.86rem] text-[#A9A9A9] "}
        >
          {a}
        </div>
      ) : (
        ""
      )}

      <div className="mt-[1.43rem] h-[2px] bg-[#B5B5B5]"></div>
    </div>
  );
};

export const Section5 = () => {
  return (
    <div className="bg-[#F3FAFF] p-[6.43rem] ">
      <h1 className=" text-center text-5xl font-medium">常见问题</h1>
      <h2 className="mt-[2.86rem] text-center text-3xl text-[#243038]">
        如果您还有疑问
      </h2>

      <div className="mx-auto mt-[5.93rem] w-[85.54rem]">
        {items.map((item) => {
          return <Item key={item.a} {...item} />;
        })}
      </div>
    </div>
  );
};
