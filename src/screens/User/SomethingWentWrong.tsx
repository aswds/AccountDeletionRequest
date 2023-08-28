import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserNotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>😕 Something went wrong</h1>
      <button
        style={{ marginTop: "1%" }}
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Sign in
      </button>
    </div>
  );
}
