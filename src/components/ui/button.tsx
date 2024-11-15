import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ type = "button", children, ...props }: ButtonProps) {
  return (
    <>
      <button
        className="p-1 text-white font-bold bg-blue-900 border-2 border-white"
        type={type}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
