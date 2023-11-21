import {
  useRef,
  useEffect,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import InputBox from "./InputBox";

export interface InputWithCopyBtnProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
export const InputWithCopyBtn = (props: InputWithCopyBtnProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string>();

  const onCopy = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
      // window.document.execCommand("copy");
      window.navigator.clipboard.writeText(inputRef.current.value);
      setMsg("复制成功");
      setTimeout(() => setMsg(undefined), 3000);
    }
  };
  return (
    <InputBox label={props.label} msg={msg}>
      <input ref={inputRef} className="flex-1 outline-none" {...props} />
      <div className="cursor-pointer px-2" onClick={() => onCopy()}>
        <i className="iconfont icon-copy font-semibold text-blue"></i>
      </div>
    </InputBox>
  );
};
