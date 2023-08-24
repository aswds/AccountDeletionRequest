import React, { useState } from "react";
import "./Input.css"; // Import your CSS file for styling
import { colors } from "../../colors/colors";

interface InputWithIconProps extends React.HTMLProps<HTMLInputElement> {
  icon: React.ReactNode;
  placeholder: string;
  onChange: () => void;
  isValid: boolean;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  icon,
  placeholder,
  onChange,
  isValid,
  ...props
}) => {
  return (
    <div
      className="input-container"
      style={{
        width: "100%",
      }}
    >
      <div
        className="icon-container"
        style={{
          display: "flex",
        }}
      >
        {icon}
      </div>
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        onChange={onChange}
        style={{ backgroundColor: colors.input }}
        {...props}
      />
    </div>
  );
};

export default InputWithIcon;
