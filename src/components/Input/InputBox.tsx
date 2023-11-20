import { UseFormRegisterReturn } from "react-hook-form";

export interface InputBoxProps {
  children: React.ReactNode;
  label: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ children, label, error }: InputBoxProps) => {
  return (
    <div>
      <div className="mb-2 mt-4">{label}</div>
      <div className="flex rounded-md border border-cyan-600 p-2">
        {children}
      </div>
      {error ? (
        <div className="mt-2 rounded-md border border-red-600 bg-red-300 p-2 text-red-600">
          {error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
