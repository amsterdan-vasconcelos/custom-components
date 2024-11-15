import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = "text", ...props },
  ref
) {
  return (
    <input
      className="outline-none border-2 rounded focus:border-pink-800 p-2"
      type={type}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
