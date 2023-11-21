import { InputWithClearBtn } from "../../Input/InputWithClearBtn";
import { useInvateFromURL } from "../../../hooks/invate";
import { useState } from "react";
import { useContractWrite } from "wagmi";
import Relation from "../../../abis/Relation";
import { useRelationContractAddress } from "../../../hooks/address";
import InputBox from "../../Input/InputBox";
import { useForm } from "react-hook-form";

interface IProps {
  setStep: (step: number) => void;
}

const defaultInvate = "0x7886107656c6d862E89222e969dEE69d761CF8C8";

export const StepInvate = ({ setStep }: IProps) => {
  const { register } = useForm();

  const invate = useInvateFromURL();
  const writeInvate = useContractWrite({
    abi: Relation,
    address: useRelationContractAddress(),
    functionName: "invite",
  });
  const [confirmInvate, setConfirmInvate] = useState<string>(
    invate || defaultInvate
  );
  const [err, setErr] = useState<string>();

  const verify = () => {
    if (confirmInvate.match(/^0x[0-9a-fA-F]{40}$/) || confirmInvate == "") {
      setErr(undefined);
      return true;
    } else {
      setErr("地址格式错误");
      return false;
    }
  };
  const onSubmit = () => {
    if (verify()) {
      writeInvate
        .writeAsync({
          args: [(confirmInvate || defaultInvate) as `0x${string}`],
        })
        .then(() => {
          setStep(3);
        })
        .catch(() => {
          setErr("确认邀请关系失败");
        });
    }
  };
  return (
    <div>
      <h1 className="mb-16 text-center text-4xl font-medium">邀请关系</h1>
      {/* <InputWithClearBtn
        label="确定您的邀请人"
        defaultValue={invate ?? ""}
        placeholder="如果没有邀请人可以为空"
        error={err}
        onInput={(e) => {
          setConfirmInvate((e as any).target.value);
        }}
        onBlur={() => verify()}
        onChange={() => verify()}
      /> */}
      <InputBox label="确定您的邀请人">
        <input type="text" className="w-full outline-none" />
      </InputBox>

      <div className="mt-16 flex justify-center">
        <div
          className="flex h-[2.86rem] w-[13.57rem] cursor-pointer  flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#84D0FF] to-link text-white"
          onClick={() => onSubmit()}
        >
          确认
        </div>
      </div>
    </div>
  );
};
