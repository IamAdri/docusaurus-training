import toast, { Toaster } from "react-hot-toast";
import styles from "./styles.module.css";
import { PropsWithChildren } from "react";
import ToasterWrapper from "./ToasterWrapper_versioned";

type ButtonProps = PropsWithChildren<{
  disabled: boolean;
  design: string;
  toastText: string;
  toastType?: "success" | "error";
}>;

function Button({
  children,
  disabled = false,
  design = "primary_button",
  toastText,
  toastType,
}: ButtonProps) {
  const styleOption = styles[design];

  const notify = () => {
    switch (toastType) {
      case "success":
        toast.success(toastText);
        break;
      case "error":
        toast.error(toastText);
        break;
      default:
        toast(toastText);
    }
  };

  return (
    <>
      <button
        disabled={disabled}
        className={`${styles.button} ${styleOption}`}
        onClick={notify}
      >
        {children}
      </button>
      <ToasterWrapper />
    </>
  );
}

export default Button;
