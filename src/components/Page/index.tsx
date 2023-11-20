import { PropsWithChildren, ReactNode } from "react";
import Card from "../Card";

export interface IProps {
  title: string;
  tips?: string;
  children?: ReactNode;
}

const Pages = ({ title, tips, children }: IProps) => {
  return (
    <div className=" p-4">
      <h1 className="mb-2 mt-4 text-center text-3xl font-bold text-cyan-600">
        {title}
      </h1>

      <div className="mx-auto h-[60vw] w-[80vw]">
        <div className="mb-2 text-orange-500">{tips}</div>
        <Card>{children}</Card>
      </div>
    </div>
  );
};

export default Pages;
