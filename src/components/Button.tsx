import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  variant: "primary" | "withIcon";
  color: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
};

const Button = ({
  children,
  disabled,
  to,
  variant,
  color,
  onClick,
  type,
}: ButtonProps) => {
  const baseStyle = "w-full py-2 px-3 text-[#f8f9fa] font-semibold";
  const variants = {
    primary: `${baseStyle} text-center text-sm rounded-lg`,
    withIcon: `${baseStyle} flex items-center gap-3 justify-center rounded-full`,
  };

  const buttonColor = {
    backgroundColor: color,
  };

  if (to) {
    return (
      <Link to={to} className={variants[variant]} style={buttonColor}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={variants[variant]}
        style={buttonColor}
        type={type}
      >
        {children}
      </button>
    );
  }
};

export default Button;
