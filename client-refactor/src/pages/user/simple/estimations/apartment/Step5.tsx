/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { IProperty } from "./PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { http } from "../../../../../utils/http.util";
import { ChangeEvent } from "react";
import { Spinner } from "../../../../../components/lib";

const schema = yup.object({
  calme: yup.string().required(),
  qualite_appartement: yup.string().required(),
  proximite_transports: yup.string().required(),
});

export const Step5 = ({
  setProperty,
  property,
  onChange,
}: {
  setProperty: React.Dispatch<React.SetStateAction<IProperty>>;
  property: IProperty;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();

  const form = useForm({
    schema: schema,
  });

  const onSubmit = () => {
    http
      .post("/estimation/default/appartement/save", property)
      .then((response: { data: { prix_estimation: string } }) => {
        console.log(response);
        setProperty((previousState) => ({
          ...previousState,
          prix_estimation: response.data.prix_estimation,
        }));
        navigate("/apartment/results");
      })
      .catch((error) => console.log(error));
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
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>Step 5</h2>
      <Input
        label="Calm"
        placeholder="Calm"
        value={property.calme}
        {...form.register("calme", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Property Quality"
        placeholder="Property Quality"
        value={property.qualite_appartement}
        {...form.register("qualite_appartement", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Proximity To Public Transports"
        placeholder="Proximity To Public Transports"
        value={property.proximite_transports}
        {...form.register("proximite_transports", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <div css={{ display: "flex", gap: "2%" }}>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="button"
          onClick={() => navigate("/apartment/step4")}
          disabled={form.formState.isSubmitting}
        >
          Back{" "}
        </Button>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <Spinner /> : "Evaluate"}{" "}
        </Button>
      </div>
    </Form>
  );
};

export default Step5;
