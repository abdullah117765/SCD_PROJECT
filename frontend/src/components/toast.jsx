import  React, { useState } from "react";
import "./toast.css";

function Toast() {
  const [visibility, setVisibility] = useState("block");
  const [BtnVisibile, setBtnVisibile] = useState("none");

  function clickHandler(type) {
    if (type === "hide") {
      setVisibility("none");
      setBtnVisibile("block");
    } else {
      setVisibility("block");
      setBtnVisibile("none");
    }
  }

  return (
    <div className="container">
      <div className="Toast" style={{ display: visibility }}>
        <span>Message sent successfully!!</span>
        <button className="btn-hide" onClick={() => clickHandler("hide")}>
          X
        </button>
      </div>
      <button
        style={{ display: BtnVisibile }}
        className="btn-show"
        onClick={() => clickHandler("show")}
      >
        Show
      </button>
    </div>
  );
}

export default function Toast2() {
  return (
    <div className="App">
      <Toast />
    </div>
  );
}
