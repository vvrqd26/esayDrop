import luxiantuPng from "../../assets/luxiantu.png";
export const Section4 = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#FAFDFF] p-12">
      <h1 className=" m-20 text-center text-5xl font-medium">路线图</h1>
      <div className="mx-auto w-[85.64rem]">
        <img className="w-[85.64rem]" src={luxiantuPng} alt="" />
      </div>
      <div className="mx-auto -mt-9 mb-20 flex w-[85.64rem] text-right">
        <div className="w-1/6">
          11月正式上线
          <br /> ZKS和StarkNet <br /> 交互产品
        </div>
        <div className="w-1/3">
          11月正式上线
          <br /> ZKS和StarkNet <br /> 交互产品
        </div>
        <div className="w-1/3">
          11月正式上线
          <br /> ZKS和StarkNet <br /> 交互产品
        </div>
      </div>
    </div>
  );
};
