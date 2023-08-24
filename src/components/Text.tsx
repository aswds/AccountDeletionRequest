import React from "react";

const Text = (props) => {
  return (
    <div
      style={{
        fontSize: props.size ?? 30,
        textAlign: "center",
        ...props.style,
      }}
    >
      {props.children}{" "}
    </div>
  );
};

export default Text;
