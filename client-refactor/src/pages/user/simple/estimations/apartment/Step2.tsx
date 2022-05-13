/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { IApartmentProperty } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { ChangeEvent } from "react";

const schema = yup.object({
  surface: yup.string().required(),
  nombre_pieces: yup.string().required(),
  nombre_salle_bain: yup.string().required(),
});

export const Step2 = ({
  property,
  onChange,
}: {
  property: IApartmentProperty;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();

  const form = useForm({
    schema: schema,
  });

  const onSubmit = () => {
    navigate("/apartment/step3");
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
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>Step 2</h2>
      <Input
        label="Surface"
        placeholder="Surface"
        value={property.surface}
        {...form.register("surface", {
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
          onClick={() => navigate("/apartment")}
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

export default Step2;
