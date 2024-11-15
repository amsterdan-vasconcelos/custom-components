import { CircleX } from "lucide-react";
import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

type ModalProps = HtmlHTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div
          className="bg-black/50 fixed inset-0 flex items-center justify-center"
          onClick={onClose}
        >
          <div className="bg-pink-100 overflow-hidden rounded-lg shadow-md relative w-[400px] p-4">
            {children}
            <button
              className="absolute top-1 right-1 outline-pink-800"
              onClick={onClose}
            >
              <CircleX />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

type ModalHeaderProps = HtmlHTMLAttributes<HTMLDivElement>;

export function ModalHeader({ children }: ModalHeaderProps) {
  return <div>{children}</div>;
}

type ModalTitleProps = HtmlHTMLAttributes<HTMLDivElement>;

export function ModalTitle({ children }: ModalTitleProps) {
  return <h2 className="font-bold text-lg">{children}</h2>;
}

type ModalDescriptionProps = HtmlHTMLAttributes<HTMLDivElement>;

export function ModalDescription({ children }: ModalDescriptionProps) {
  return <p className="text-slate-600">{children}</p>;
}

type ModalContentProps = HtmlHTMLAttributes<HTMLDivElement>;

export function ModalContent({ children }: ModalContentProps) {
  return <div className="my-6 flex flex-col gap-2">{children}</div>;
}

type ModalFooterProps = HtmlHTMLAttributes<HTMLDivElement>;

export function ModalFooter({ children }: ModalFooterProps) {
  return <div className="flex justify-end gap-2">{children}</div>;
}

type Variants = "error" | "success" | "warning" | "none";
type ModalActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variants;
};

const variants: Record<Variants, string> = {
  none: "text-black",
  error: "bg-red-800/80 text-white",
  success: "bg-green-800/80 text-white",
  warning: "bg-orange-200 text-white",
};

export function ModalAction({
  type = "button",
  variant = "none",
  children,
  ...props
}: ModalActionProps) {
  const color = variants[variant];

  return (
    <button
      className={`p-2 border-2 rounded focus:border-pink-800 ${color}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
