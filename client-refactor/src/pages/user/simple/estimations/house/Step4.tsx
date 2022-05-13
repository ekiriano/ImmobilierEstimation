/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { IHouseProperty } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { ChangeEvent } from "react";

const schema = yup.object({
  diagnostic_performance_energetique: yup.string().required(),
  annee_construction: yup.string().required(),
  etat_bien: yup.string().required(),
  qualite_maison: yup.string().required(),
});

export const Step4 = ({
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
    navigate("/house/step5");
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
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>Step 4</h2>
      <Input
        label="Energetic Performance"
        placeholder="Energetic Performance"
        value={property.diagnostic_performance_energetique}
        {...form.register("diagnostic_performance_energetique", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Property Condition"
        placeholder="Property Condition"
        value={Number(property.etat_bien)}
        {...form.register("etat_bien", {
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
      <Input
        label="Property Quality"
        placeholder="Property Quality"
        value={property.qualite_maison}
        {...form.register("qualite_maison", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <div css={{ display: "flex", gap: "2%" }}>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="button"
          onClick={() => navigate("/house/step3")}
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

export default Step4;
