import React from "react";
import { Button } from "@mui/material";
export default function Header() {
  return (
    <div className="header">
      <h1
        style={{
          fontSize: "60px",
          textDecoration: "underline",
          color: "#6A5E95",
        }}
      >
        Things you can do with the Dog API
      </h1>
    </div>
  );
}
