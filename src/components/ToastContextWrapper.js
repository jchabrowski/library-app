import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const ToastContext = React.createContext(null);
const ToastProvider = ToastContext.Provider;
const ToastContextWrapper = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("aaa");

  const setToastShow = (isVisible) => {
    setShow(isVisible);
  };

  const setToastMessage = (message) => {
    setMessage(message);
  };

  const closeToast = () => {
    setShow(false);
  };

  const toastData = {
    show: show,
    message: message,
    setShow: setToastShow,
    setMessage: setToastMessage,
  };
  return (
    <>
      <Toast
        show={show}
        onClose={closeToast}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>

      <ToastProvider value={toastData}>{props.children}</ToastProvider>
    </>
  );
};

export { ToastContextWrapper, ToastContext };
