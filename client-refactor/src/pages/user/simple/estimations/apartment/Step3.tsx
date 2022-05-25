/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { ApartmentWID } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { ChangeEvent } from "react";

const schema = yup.object({
  etage: yup.string().required(),
  nombre_etage_total: yup.string().required(),
  annee_construction: yup.string().required(),
});

export const Step3 = ({
  property,
  onChange,
}: {
  property: ApartmentWID;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();

  const form = useForm({
    schema: schema,
  });

  const onSubmit = () => {
    navigate("/apartment/step4");
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
        value={property.etage}
        {...form.register("etage", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Total Levels"
        placeholder="Total Levels"
        value={property.nombre_etage_total}
        {...form.register("nombre_etage_total", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Construction Year"
        placeholder="Construction Year"
        value={property.annee_construction}
        {...form.register("annee_construction", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <div css={{ display: "flex", gap: "2%" }}>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="button"
          onClick={() => navigate("/apartment/step2")}
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
