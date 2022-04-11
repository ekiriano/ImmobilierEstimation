/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { SavedApartments } from "../pages/user/simple/saved/SavedApartments";

export const Dashboard = () => {

  const [showEstimatedHouses, setEstimatedHouses] = useState<boolean>(false);
  const [showEstimatedApartments, setEstimatedApartments] = useState<boolean>(false);

    return (<div css={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#10B981',
    height: '100vh', }}>
      <h1 css={{ color: 'white' }}>Dashboard</h1>
      </div>)
};
