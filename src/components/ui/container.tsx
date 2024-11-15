import { HtmlHTMLAttributes } from "react";

type BoxProps = HtmlHTMLAttributes<HTMLDivElement>;

function Box({ children, ...props }: BoxProps) {
  return (
    <>
      <div
        className="p-5 bg-slate-500 border-2 border-black flex flex-col gap-1 w-[300px]"
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export default Box;
