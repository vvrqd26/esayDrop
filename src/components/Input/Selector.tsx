import {
  useRef,
  DetailedHTMLProps,
  SelectHTMLAttributes,
  ReactNode,
  FC,
  ReactElement,
  useEffect,
  useState,
} from "react";
import InputBox from "./InputBox";

export interface IMySelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  children: ReactElement<IMySelectOptionProps>[];
  value?: string;
}
export const MySelect = ({
  children,
  label,
  value,
  placeholder,
}: IMySelectProps) => {
  const [showOption, setShowOption] = useState<
    ReactElement<IMySelectOptionProps>
  >(<div>{placeholder ?? "请选择"}</div>);
  const [_value, setValue] = useState<string>("default");
  const [show, setShow] = useState(false);
  const handleChange = (value: string) => {
    setValue(value);
    setShow(false);
  };

  useEffect(() => {
    children.forEach((item) => {
      if (item.props.value === _value) {
        setShowOption(item);
      }
    });
  }, [children, _value]);

  return (
    <InputBox label={label}>
      <div className="flex w-full">
        <div className="relative flex-1">
          <div
            className="w-full cursor-pointer"
            onClick={() => setShow((show) => !show)}
          >
            {showOption}
          </div>
          {show && (
            <div
              className={"absolute top-[100%] mt-4 w-full border bg-white p-4 "}
            >
              {children.map((item) => {
                return (
                  <div
                    key={item.props.value}
                    className="w-full cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => handleChange(item.props.value)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {show ? (
          <i className="iconfont icon-toBottom-fill font-semibold text-cyan-600"></i>
        ) : (
          <i className="iconfont icon-right font-semibold text-cyan-600"></i>
        )}
      </div>
    </InputBox>
  );
};

export interface IMySelectOptionProps {
  value: string;
  children?: ReactNode;
}
export const MyOption: FC<IMySelectOptionProps> = ({
  children,
  value,
}: IMySelectOptionProps) => {
  return <div>{children}</div>;
};
