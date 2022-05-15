import { AxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ErrorResponse } from "../../APIResponsesTypes";

import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { registerParams } from "../../services/AuthService/AuthService";
import { Input } from "../atoms/Input";
import { Button, Spinner } from "../lib";
import { Form, useForm } from "../molecules/Form";
import { Errors } from "../partials/Errors";

const schema = yup.object({
  name: yup.string().min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must  match"),
});

export const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState<
    | {
        [key: string]: string;
      }
    | undefined
  >(undefined);
  const form = useForm({
    schema: schema,
  });
  const onSubmit = (values: registerParams) =>
    auth
      .register(values)
      .then(() => {
        navigate("/login");
      })
      .catch((error: AxiosError<ErrorResponse>) =>
        setRegisterError(error.response?.data)
      );

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col max-w-3xl mx-auto my-40 bg">
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex flex-row flex-wrap justify-center mt-6 mb-12">
          <Link to="/">
            <img src={logo} alt="Home Page" className="w-30 h-30" />
          </Link>
        </div>
        {registerError ? <Errors data={registerError} /> : null}
        <Input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          label="Name"
          placeholder="Name"
          {...form.register("name")}
        />

        <Input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          label="Email"
          placeholder="Email"
          {...form.register("email")}
        />

        <Input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          label="password"
          placeholder="Password"
          type="password"
          {...form.register("password")}
        />

        <Input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          label="Password Confirmation"
          placeholder="Confirm Password"
          type="password"
          {...form.register("passwordConfirmation")}
        />

        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            {form.formState.isSubmitting ? <Spinner /> : "Sign Up"}
          </Button>
          <Link
            to="/login"
            className="hover:text-emerald-400 underline decoration-solid"
          >
            Already a member ?
          </Link>
        </div>
      </Form>
    </div>
  );
};
