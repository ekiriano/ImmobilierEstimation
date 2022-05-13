/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { IProperty } from "./PropertyType";

export const Result = ({
  property,
  clearForm,
}: {
  property: IProperty;
  clearForm: () => void;
}) => {
  const [price, setPrice] = useState<string>("");
  useEffect(() => {
    setPrice(property.prix_estimation);
    clearForm();
  }, []);
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
          <b>Your Apartment Is Estimated At</b> : {price} €
        </p>
      </div>
    </div>
  );
};
