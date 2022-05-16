import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { Input } from "../../components/atoms/Input";
import { useForm, Form } from "../../components/molecules/Form";

import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { Errors } from "../../components/partials/Errors";

import { Button, Spinner } from "../../components/lib";
import { loginParams } from "../../services/AuthService/AuthService";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../APIResponsesTypes";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    schema: schema,
  });
  const [loginError, setLoginError] = useState<
    | {
        [key: string]: string;
      }
    | undefined
  >(undefined);

  const onSubmit = (values: loginParams) => {
    login(values)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error: AxiosError<ErrorResponse>) =>
        setLoginError(error.response?.data)
      );
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col max-w-3xl mx-auto my-40 bg">
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex flex-row flex-wrap justify-center mt-6 mb-12">
          <Link to="/">
            <img src={logo} alt="Home Page" className="w-30 h-30" />
          </Link>
        </div>
        {loginError ? <Errors data={loginError} /> : null}
        <div className="mb-4">
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            label="Email"
            placeholder="Email"
            {...form.register("email")}
          />
        </div>

        <div className="mb-6">
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            label="Password"
            placeholder="Password"
            type="password"
            {...form.register("password")}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            {form.formState.isSubmitting ? <Spinner /> : "Sign in"}
          </Button>
          <Link
            to="/register"
            className="hover:text-emerald-400 underline decoration-solid"
          >
            Don't have an account ?
          </Link>
        </div>
      </Form>
    </div>
  );
};
