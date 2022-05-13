/** @jsxImportSource @emotion/react */
import { SavedApartments } from "../pages/user/simple/saved/SavedApartments";
import { SavedHouses } from "../pages/user/simple/saved/SavedHouses";

export const Dashboard = () => {
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#10B981",
        height: "100vh",
        padding: "1.5rem 3rem",
      }}
    >
      <h1 css={{ fontWeight: "bold", fontSize: "2rem" }}>Dashboard</h1>
      <div
        css={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
        }}
      >
        <SavedApartments />
        <SavedHouses />
      </div>
    </div>
  );
};
