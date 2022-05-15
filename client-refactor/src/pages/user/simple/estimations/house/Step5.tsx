/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { IHouseProperty } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { http } from "../../../../../utils/http.util";
import { ChangeEvent } from "react";
import { Spinner } from "../../../../../components/lib";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../../../../APIResponsesTypes";

const schema = yup.object({
  calme: yup.string().required(),
  qualite_toiture: yup.string().required(),
  proximite_transports: yup.string().required(),
  luminosite: yup.string().required(),
});

export const Step5 = ({
  setProperty,
  property,
  onChange,
}: {
  setProperty: React.Dispatch<React.SetStateAction<IHouseProperty>>;
  property: IHouseProperty;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();

  const form = useForm({
    schema: schema,
  });

  const onSubmit = () => {
    http
      .post<IHouseProperty>("/estimation/default/house/save", property)
      .then(({ data }) => {
        setProperty((previousState) => ({
          ...previousState,
          prix_estimation: data.prix_estimation,
        }));
        navigate("/house/results");
      })
      .catch((error: AxiosError<ErrorResponse>) => console.log(error));
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
        label="Roof Quality"
        placeholder="Roof Quality"
        value={property.qualite_toiture}
        {...form.register("qualite_toiture", {
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
      <Input
        label="Lighting"
        placeholder="Lighting"
        value={property.luminosite}
        {...form.register("luminosite", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <div css={{ display: "flex", gap: "2%" }}>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="button"
          onClick={() => navigate("/house/step4")}
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
