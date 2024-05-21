import { ChangeEvent } from "react";

type InputPropsType = {
  id: string;
  type: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, ...props }: InputPropsType) => {
  return (
    <input
      type={type}
      {...props}
      className="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-[#219ebc] focus:border-[#219ebc] block w-full p-2.5 "
      // onChange={onChange}
    />
  );
};

export default Input;
