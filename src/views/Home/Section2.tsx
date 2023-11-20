import BJPNG from "../../assets/bjs2.png";
import C1 from "../../assets/s2c1.png";
import C2 from "../../assets/s2c2.png";
import C3 from "../../assets/s2c3.png";
import C4 from "../../assets/s2c4.png";
import C5 from "../../assets/s2c5.png";
import C6 from "../../assets/s2c6.png";

const items = [
  {
    title: "专业团队",
    slogen: `专业空投猎人团队开发，
10W+精品账号经验，累计实现营收3000万+，
资深投研团队，空投信息获取快人一步`,
    img: C1,
  },
  {
    title: "全自动化交互",
    slogen: `全自动化交互，节省时间，灵活的策略，
最大程度避免女巫风险，精准打造精品账号，
轻松实现财富增值`,
    img: C2,
  },
  {
    title: "极致安全体验",
    slogen: `加密与混淆算法双重保障，
私钥留存本地，杜绝一切安全隐患`,
    img: C3,
  },
  {
    title: "全面数据服务",
    slogen: `全链聚合数据一键查询，覆盖广，
全网账户地址秒级响应`,
    img: C4,
  },
  {
    title: "优质的用户服务",
    slogen: `个性化定制、1对1私人定制，
最大程度满足用户需求，不断创新和升级服务方案
并提供优化建议高效便捷，专屈客服，及时响应`,
    img: C5,
  },
  {
    title: "免费的附加服务",
    slogen: `项目深度研究报告、空投保妈级教程、
一手行业资讯`,
    img: C6,
  },
];

export const Section2 = () => {
  return (
    <div
      className="relative"
      style={{
        background: `url(${BJPNG})`,
      }}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="mt-24 text-center text-5xl font-medium text-[#243038]">
          EasyDrop - 更便捷的工具，更节约时间
        </div>
        <div className="mt-10 text-3xl text-[#243038]">
          覆盖范围更广、持续不断的更新优质活动
        </div>

        <div className="mt-12 grid grid-cols-2">
          {items.map((item) => {
            return (
              <div className="mx-[35px] my-[30px] flex h-[34rem] w-[47rem] flex-col items-center rounded-[30px] border border-[#EDF8FF] bg-white pt-[3.14rem] shadow-card">
                <img src={item.img} className="w-[19.58rem]" alt="" />
                <div className=" mb-8 mt-9 text-4xl font-medium text-[#243038]">
                  {item.title}
                </div>
                <pre className="px-12 text-center font-base text-xl font-medium text-[#243038]">
                  {item.slogen}
                </pre>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
