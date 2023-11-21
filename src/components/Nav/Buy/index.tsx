import { Modal } from "../../Model";
import { BaseCard } from "../../Card/Base";
import { useEffect, useRef, useState } from "react";
import { Step1 } from "./Step1";
import autoAnimate from "@formkit/auto-animate";
import { Step2 } from "./Step2";
import { useInvate } from "../../../hooks/invate";
import { StepInvate } from "./stepInvate";

interface IProps {
  showModal: boolean;
  onClose?: () => void;
  inputStep: number;
}

export const Buy = ({ showModal, onClose, inputStep }: IProps) => {
  const [step, setStep] = useState(inputStep);
  const parent = useRef(null);
  const invate = useInvate();
  useEffect(() => {
    if (parent.current == null) return;
    autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    setStep(inputStep);
    if (inputStep == 3 && !invate) {
      setStep(4);
    }
  }, [inputStep]);

  return (
    <Modal
      show={showModal}
      onClose={() => {
        onClose && onClose();
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
              <Step2 setStep={(n) => setStep(n)} opType="add" />,
              <Step2 setStep={(n) => setStep(n)} opType="up" />,
              <Step2 setStep={(n) => setStep(n)} opType="all" />,
              <StepInvate setStep={(n) => setStep(n)} />,
            ][step]
          }
        </div>
      </BaseCard>
    </Modal>
  );
};
