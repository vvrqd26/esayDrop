import { PropsWithChildren, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

interface IProps {
  show?: boolean;
  onClose?: () => void;
}
export const Modal = ({
  show,
  children,
  onClose,
}: PropsWithChildren<IProps>) => {
  const parent = useRef(null);
  useEffect(() => {
    if (parent.current == null) return;
    autoAnimate(parent.current);
  }, [parent]);
  return (
    <div ref={parent as any}>
      {show ? (
        <div
          className={
            "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-800/60"
          }
          onClick={() => onClose && onClose()}
        >
          {children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
