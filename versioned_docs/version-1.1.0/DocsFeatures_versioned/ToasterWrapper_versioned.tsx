import { Toaster } from "react-hot-toast";

function ToasterWrapper() {
  return (
    <Toaster
      toastOptions={{
        style: {
          width: "500px",
        },
      }}
    />
  );
}

export default ToasterWrapper;
