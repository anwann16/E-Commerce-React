import { ReactNode } from "react";

type ButtonContainerProp = {
  children: ReactNode;
  width: number;
};

const ButtonContainer = ({ children, width }: ButtonContainerProp) => {
  const buttonContainerStyle = {
    width,
  };

  return <div style={buttonContainerStyle}>{children}</div>;
};

export default ButtonContainer;
