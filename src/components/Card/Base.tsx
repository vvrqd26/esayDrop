import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
}
export const BaseCard = ({ children }: Iprops) => {
  return (
    <div className="rounded-3xl border border-[#EDF8FF] bg-white p-11 shadow-card">
      {children}
    </div>
  );
};
