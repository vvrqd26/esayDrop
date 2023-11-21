import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";

export interface InputBoxProps {
  children: React.ReactNode;
  label: string;
  error?: string;
  msg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ children, label, error, msg }: InputBoxProps) => {
  const parent = useRef(null);
  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent.current]);

  return (
    <div ref={parent}>
      <div className="mb-2 mt-4">{label}</div>
      <div className="flex rounded-md border border-blue p-2">{children}</div>
      {error && (
        <div className="mt-2 rounded-md border border-red bg-red/30 p-2 text-red">
          {error}
        </div>
      )}
      {msg && <div className="p-2 text-green-600">{msg}</div>}
    </div>
  );
};

export default InputBox;
