import { ReactNode } from "react";

type FormRowProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

const FormRow = ({ label, error, children }: FormRowProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={children.props.id}
          className="block mb-2 text-sm font-medium text-[#219ebc]"
        >
          {label}
        </label>
      )}
      {children}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormRow;
