/** @jsxImportSource @emotion/react */
import { IProperty } from "./PropertyType";

export const Result = ({ property }: { property: IProperty }) => {
  return (
    <div>
      <div
        css={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p css={{ fontSize: "x-large" }}>
          <b>Your Apartment Is Estimated At</b> : {property.prix_estimation} €
        </p>
      </div>
    </div>
  );
};
