/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Result } from "./Result";
import { IHouseProperty } from "../PropertyType";

const initialProperty = {
  rue: "",
  code_postal: "",
  ville: "",
  surface_habitable: "",
  surface_totale_terrain: "",
  surface_habitable_constructible: "",
  nombre_pieces: "",
  nombre_salle_bain: "",
  nombre_niveaux: "",
  annee_construction: "",
  diagnostic_performance_energetique: "",
  etat_bien: "",
  qualite_maison: "",
  luminosite: "",
  calme: "",
  proximite_transports: "",
  qualite_toiture: "",
  prix_estimation: "",
};

export const MasterForm = () => {
  const [property, setProperty] = useState<IHouseProperty>(initialProperty);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProperty((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setProperty(initialProperty);
  };

  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#10B981",
        height: "100vh",
        padding: "1.5rem 3rem",
      }}
    >
      <h1 css={{ fontWeight: "bold", fontSize: "2rem" }}>
        House Estimation Form
      </h1>
      <Routes>
        <Route
          index
          element={<Step1 property={property} onChange={onChange} />}
        />
        <Route
          path="/step2"
          element={<Step2 property={property} onChange={onChange} />}
        />
        <Route
          path="/step3"
          element={<Step3 property={property} onChange={onChange} />}
        />
        <Route
          path="/step4"
          element={<Step4 property={property} onChange={onChange} />}
        />
        <Route
          path="/step5"
          element={
            <Step5
              setProperty={setProperty}
              property={property}
              onChange={onChange}
            />
          }
        />
        <Route
          path="/results"
          element={<Result property={property} clearForm={clearForm} />}
        />
      </Routes>
    </div>
  );
};
