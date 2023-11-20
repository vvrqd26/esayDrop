import S1Png from "../../assets/section1.png";
export const Section1 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-bg pb-12 pt-20">
      <h1 className="font-base text-5xl font-semibold leading-relaxed text-title">
        简单的操作程序化
        <br />
        空投自动化交互
      </h1>
      <div className="my-[35px] text-center text-xl text-slogen">
        为用户在Web3领域，节省大量时间、提高用户对于项目 <br />
        的参与度、抓住更多机会立即使用
      </div>
      <div className="flex justify-center">
        <span className="inline-block cursor-pointer rounded-md bg-gradient-to-r from-[#84D0FF] to-[#138EFF] px-20 py-3 text-base text-white">
          立即使用
        </span>
      </div>
      <div className="mt-12 text-center">
        <img src={S1Png} className="max-w-[930px]" alt="" />
      </div>
    </div>
  );
};
