import { useAccount, useContractRead, useDisconnect } from "wagmi";
import Vip from "../../../abis/Vip";
import { ConnectKitButton, useModal } from "connectkit";
import { useInvateURL, useVipContractAddress } from "../../../hooks/address";
import { useUserInfo } from "../../../hooks/userInfo";
import moment from "moment";
import { InputWithCopyBtn } from "../../Input/InputWithCopyBtn";

interface IProps {
  setStep: (step: number) => void;
}
export const Step1 = ({ setStep }: IProps) => {
  const account = useAccount();
  const userInfo = useUserInfo();
  const disconnect = useDisconnect();
  const { setOpen } = useModal();
  const invateURL = useInvateURL();

  return (
    <div>
      <h1 className="mb-16 text-center text-4xl font-medium">钱包信息</h1>
      <div className="flex">
        <div className="text-3xl">等级：</div>
        <div className="flex-1 text-center text-3xl">
          {userInfo?.tierName ?? "查询中..."}
        </div>
        <div className="flex">
          {userInfo && userInfo.tier < 3 && userInfo.tier > 0 && (
            <div
              className="mx-1 cursor-pointer rounded-md bg-link px-6 py-3 text-white"
              onClick={() => setStep(1)}
            >
              续费
            </div>
          )}
          {userInfo && userInfo.tier < 3 && userInfo.tier > 0 && (
            <div
              className="mx-1 cursor-pointer rounded-md bg-[#F19149] px-6 py-3 text-white"
              onClick={() => setStep(2)}
            >
              升级
            </div>
          )}
        </div>
      </div>
      {/* 只有年卡和月卡有到期时间 */}
      {userInfo && userInfo.tier < 3 && userInfo.tier > 0 ? (
        <div className="flex text-gray-500">
          <div>
            到期时间：
            {moment(Number(userInfo.exp * 1000n)).format("YYYY-MM-DD")}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex text-gray-500">
        <div>钱包地址：{account.address ?? "未知"} </div>
      </div>
      <br />
      <hr />
      <div>
        <InputWithCopyBtn label="邀请链接" value={invateURL} />
      </div>
      <div className="mt-[4.29rem] flex justify-center text-center">
        {account.isConnected ? (
          <div
            onClick={() => {
              disconnect.disconnect();
            }}
            className="flex h-[2.86rem] w-[13.57rem] flex-col  items-center justify-center rounded-md bg-gradient-to-r from-[#84D0FF] to-link text-white"
          >
            断开
          </div>
        ) : (
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="flex h-[2.86rem] w-[13.57rem] flex-col  items-center justify-center rounded-md bg-gradient-to-r from-[#84D0FF] to-link text-white"
          >
            连接钱包
          </div>
        )}
      </div>
    </div>
  );
};
