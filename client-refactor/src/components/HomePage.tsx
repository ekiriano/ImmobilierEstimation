/** @jsxImportSource @emotion/react */

import logo from "../assets/images/estimmo_logo.png";

import { Link } from "./lib";

export const HomePage = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#10B981",
        height: "100vh",
      }}
    >
      <img src={logo} alt="logo" />
      <h1 css={{ color: "white", marginBottom: "1rem" }}>🐐 Estimmation</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridGap: "0.75rem",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};
