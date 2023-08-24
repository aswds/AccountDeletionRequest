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
      <h1>😕 User Not Found</h1>
      <p>Oops! The user you are looking for doesn't exist.</p>
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
