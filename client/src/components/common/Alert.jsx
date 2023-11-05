import React from "react";

const Alert = ({ type, message }) => {
  const [show, setShow] = React.useState("");
  const onClose = () => {
    setShow("hidden");
  };
  return (
    <section className="w-4/5 mx-auto">
      <div className={`alert ${type} ${show}`}>
        <p>{message}</p>
        <button className={`close-button `} onClick={onClose}>
          &times;
        </button>
      </div>
    </section>
  );
};

export default Alert;
