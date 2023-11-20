import { useModal } from "connectkit";
import { useAccount } from "wagmi";

export const BuyButton = () => {
  const account = useAccount();
  const { setOpen } = useModal();
  return (
    <span
      onClick={() => {
        !account.isConnected
          ? setOpen(true)
          : window.document.getElementById("buybtn")?.click();
      }}
      className="inline-block cursor-pointer rounded-md bg-gradient-to-r from-[#84D0FF] to-[#138EFF] px-20 py-3 text-base text-white"
    >
      {account.isConnected ? "立即使用" : "连接钱包"}
    </span>
  );
};
