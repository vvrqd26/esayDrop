import { InputWithClearBtn } from "../../Input/InputWithClearBtn";
import { useInvateFromURL } from "../../../hooks/invate";
import { useState } from "react";
import { useAccount, useContractWrite } from "wagmi";
import Relation from "../../../abis/Relation";
import { useRelationContractAddress } from "../../../hooks/address";
import InputBox from "../../Input/InputBox";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  setStep: (step: number) => void;
}

const defaultInvate = "0x7886107656c6d862E89222e969dEE69d761CF8C8";

export const StepInvate = ({ setStep }: IProps) => {
  const account = useAccount();
  interface IFormInput {
    invateBy: string;
  }
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm<IFormInput>();

  const invate = useInvateFromURL();
  const writeInvate = useContractWrite({
    abi: Relation,
    address: useRelationContractAddress(),
    functionName: "invite",
  });
  const [confirmInvate, setConfirmInvate] = useState<string>(
    invate || defaultInvate
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="mb-16 text-center text-4xl font-medium">
        邀请关系{errors.invateBy}
      </h1>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          label="确定您的邀请人"
          error={isValid ? undefined : "请输入正确地址"}
        >
          <input
            type="text"
            className="w-full outline-none"
            {...register("invateBy", {
              pattern: /(^0x[0-9a-fA-F]{40}$)|(^$)/,
              onChange: (e) => {
                console.log(e, errors);
              },
            })}
            placeholder="如果没有邀请人可以为空"
          />
        </InputBox>
        <div className="mt-16 flex justify-center">
          <input
            onClick={() => {
              const values = getValues();
              if (account.address == values.invateBy) {
                alert("不能和自己绑定");
                return;
              }
              if (isValid) {
                writeInvate
                  .writeAsync({
                    args: [(values.invateBy || defaultInvate) as `0x${string}`],
                  })
                  .then(() => {
                    setStep(3);
                  })
                  .catch((e) => {
                    alert("绑定推荐关系失败");
                  });
              }
            }}
            className="flex h-[2.86rem] w-[13.57rem] cursor-pointer  flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#84D0FF] to-link text-white"
            type="submit"
          ></input>
        </div>
      </form>
    </div>
  );
};
