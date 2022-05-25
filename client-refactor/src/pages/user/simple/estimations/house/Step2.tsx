/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { HouseWID } from "../PropertyType";
import { Button } from "../../../../../components/atoms/button";

import { useForm, Form } from "../../../../../components/molecules/Form";
import { Input } from "../../../../../components/atoms/Input";
import { ChangeEvent } from "react";

const schema = yup.object({
  surface_habitable: yup.string().required(),
  surface_habitable_constructible: yup.string().required(),
  surface_totale_terrain: yup.string().required(),
});

export const Step2 = ({
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
    navigate("/house/step3");
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
        label="Living Space"
        placeholder="Living Space"
        value={property.surface_habitable}
        {...form.register("surface_habitable", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Contructable Living Area Land"
        placeholder="Contructable Living Area Land"
        value={property.surface_habitable_constructible}
        {...form.register("surface_habitable_constructible", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <Input
        label="Total Land Area"
        placeholder="Total Land Area"
        value={property.surface_totale_terrain}
        {...form.register("surface_totale_terrain", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      />
      <div css={{ display: "flex", gap: "2%" }}>
        <Button
          css={{ width: "48%" }}
          variant="primary"
          type="button"
          onClick={() => navigate("/house")}
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
