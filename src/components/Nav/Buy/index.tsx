import { Modal } from "../../Model";
import { BaseCard } from "../../Card/Base";
import { useEffect, useRef, useState } from "react";
import { Step1 } from "./Step1";
import autoAnimate from "@formkit/auto-animate";
import { Step2 } from "./Step2";

interface IProps {
  showModal: boolean;
  onClose?: () => void;
}

export const Buy = ({ showModal, onClose }: IProps) => {
  const [step, setStep] = useState(0);
  const parent = useRef(null);
  useEffect(() => {
    if (parent.current == null) return;
    autoAnimate(parent.current);
  }, [parent]);

  return (
    <Modal
      show={showModal}
      onClose={() => {
        onClose && onClose();
        setStep(0);
      }}
    >
      <BaseCard>
        <div
          ref={parent}
          className="w-[27.21rem]"
          onClick={(e) => {
            e.stopPropagation(), e.preventDefault();
          }}
        >
          {
            [
              <Step1 setStep={(n) => setStep(n)} />,
              <Step2 setStep={(n) => setStep(n)} />,
              <Step2 setStep={(n) => setStep(n)} isUp={true} />,
            ][step]
          }
        </div>
      </BaseCard>
    </Modal>
  );
};
