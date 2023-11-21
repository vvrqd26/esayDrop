import LOGO from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { ConnectKitButton, useModal } from "connectkit";
import { useAccount, useContractRead } from "wagmi";
import Vip from "../../abis/Vip";
import { useState } from "react";
import { Buy } from "./Buy";
import { shortAddress } from "../../utils/string";
import { SociaList } from "./SocialList";

const menuList = [
  {
    text: "首页",
    to: "/",
  },
  {
    text: "批量提币",
    to: "/1",
  },
  {
    text: "自动交互",
    to: "/2",
  },
  {
    text: "交互INFO",
    to: "/info",
  },
  {
    text: "空投查询",
    to: "/4",
  },
  {
    text: "最新空头跟踪",
    to: "/5",
  },
];

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { setOpen } = useModal();
  const [step, setStep] = useState(0);
  const account = useAccount();
  return (
    <div className="flex items-center justify-around bg-white py-4">
      <Buy
        inputStep={step}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
      <div>
        <img src={LOGO} className="w-[153px]" alt="" />
      </div>
      <div className="flex items-center justify-between">
        {menuList.map((item) => {
          return (
            <NavLink to={item.to} key={item.text} className={"mx-2"}>
              {({ isActive }) => {
                if (isActive) {
                  return (
                    <span className="rounded-[10px] border border-[#DAEEFF] bg-[#EAF7FF] px-[17px] py-[13px] font-semibold text-[#1480F6] ">
                      {item.text}
                    </span>
                  );
                }
                return <span className="text-[#525252]">{item.text}</span>;
              }}
            </NavLink>
          );
        })}
      </div>
      <div className="flex w-[500px]  items-center justify-around">
        <span
          id="buybtn"
          className="cursor-pointer rounded-md bg-[#F19149] px-4 py-3 font-semibold text-white"
          onClick={() => {
            setStep(3);
            setShowModal((show) => !show);
          }}
        >
          购买会员
        </span>
        <SociaList className="text-3xl text-[#3FAAFF]" />
        <div
          onClick={() => {
            if (account.isConnected) {
              setStep(0);
              setShowModal(true);
            } else {
              setOpen(true);
            }
          }}
          className="flex h-[2.86rem] w-[13.57rem] flex-col  items-center justify-center rounded-md bg-gradient-to-r from-[#84D0FF] to-link text-white"
        >
          {account.isConnected ? shortAddress(account.address!) : "连接钱包"}
        </div>
      </div>
    </div>
  );
};
