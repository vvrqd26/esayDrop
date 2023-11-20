import { SociaList } from "../../components/Nav/SocialList";

export const Footer = () => {
  return (
    <div className=" bg-black py-[1.79rem]">
      <div className="mx-auto flex max-w-[85.54rem] justify-between text-[1.71rem] text-white">
        <div>联系我们</div>
        <div>
          <SociaList className="mx-2" />
        </div>
      </div>
    </div>
  );
};
