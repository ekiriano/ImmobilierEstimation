/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { IHouseProperty } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { ChangeEvent } from "react";

const schema = yup.object({
  nombre_niveaux: yup.string().required(),
  nombre_pieces: yup.string().required(),
  nombre_salle_bain: yup.string().required(),
});

export const Step3 = ({
  property,
  onChange,
}: {
  property: IHouseProperty;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();

  const form = useForm({
    schema: schema,
  });

  const onSubmit = () => {
    console.log(property);
    navigate("/house/step4");
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      css={{
        display: "flex",
        flexDirection: "column",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>Step 3</h2>
      <Input
        label="Levels"
        placeholder="Levels"
        value={property.nombre_niveaux}
        {...form.register("nombre_niveaux", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Rooms"
        placeholder="Rooms"
        value={property.nombre_pieces}
        {...form.register("nombre_pieces", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Bathrooms"
        placeholder="Bathrooms"
        value={property.nombre_salle_bain}
        {...form.register("nombre_salle_bain", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <div css={{ display: "flex", gap: "2%" }}>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="button"
          onClick={() => navigate("/house/step2")}
        >
          Back{" "}
        </Button>
        <Button css={{ width: "48%" }} variant="primary" type="submit">
          Next{" "}
        </Button>
      </div>
    </Form>
  );
};

export default Step3;
