/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { HouseWID } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { ChangeEvent } from "react";

const schema = yup.object({
  rue: yup.string().required(),
  code_postal: yup.string().required(),
  ville: yup.string().required(),
});

export const Step1 = ({
  property,
  onChange,
}: {
  property: HouseWID;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();

  const form = useForm({
    schema: schema,
  });

  const onSubmit = () => {
    navigate("/house/step2");
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
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>Step 1</h2>
      <Input
        label="Street"
        placeholder="Street"
        value={property.rue}
        {...form.register("rue", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Zip Code"
        placeholder="Zip Code"
        value={property.code_postal}
        {...form.register("code_postal", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="City"
        placeholder="City"
        value={property.ville}
        {...form.register("ville", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Button css={{ width: "100%" }} variant="primary" type="submit">
        Next{" "}
      </Button>
    </Form>
  );
};

export default Step1;
