import {
  useRef,
  useEffect,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import InputBox from "./InputBox";

export interface InputWithClearBtnProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
export const InputWithClearBtn = (props: InputWithClearBtnProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClear = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "";
      inputRef.current.blur();
    }
  };
  return (
    <InputBox label={props.label}>
      <input ref={inputRef} className="flex-1 outline-none" {...props} />
      <i
        className="iconfont icon-close1 font-semibold text-cyan-600"
        onClick={() => onClear()}
      ></i>
    </InputBox>
  );
};
