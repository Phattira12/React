import React from "react";

export default function AuthenLayout(props) {
  return (
    <>
      <div 
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        transform: "translate(-50%, -50%)",
      }}
      >
        <div className="section">{props.children}</div>
      </div>
    </>
  );
}
