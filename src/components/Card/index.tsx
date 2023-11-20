import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full rounded-3xl bg-white px-8 py-6 shadow-indigo-200">
      {children}
    </div>
  );
};

export default Card;
