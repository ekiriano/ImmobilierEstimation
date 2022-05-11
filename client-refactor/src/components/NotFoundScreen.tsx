/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

export const NotFoundScreen = () => {
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
      <h1 css={{ color: "white" }}>
        Ooops! Nothing here click{" "}
        <Link
          css={{
            textDecoration: "underline",
            ":hover": {
              color: "black",
            },
          }}
          to="/dashboard"
        >
          Go Back Home
        </Link>
      </h1>
    </div>
  );
};
