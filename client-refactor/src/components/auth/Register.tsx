/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { Errors } from "../partials/Errors";
import { useState } from "react";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface IAuthErrors {
  data: {
    [key: string]: string;
  }
}

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
  const [registerError, setRegisterError] = useState<{
    [key: string]: string;
  } |null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = (data) => auth.register(data).catch(({response}:{response: IAuthErrors} ) => setRegisterError(response.data));

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col max-w-3xl mx-auto my-40 bg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row flex-wrap justify-center mt-6 mb-12">
          <Link to="/">
            <img src={logo} alt="Home Page" className="w-30 h-30" />
          </Link>
        </div>
        {registerError ? <Errors data={registerError} /> : ""}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            placeholder="Name"
            {...register("name")}
          />
          {<p className="text-sm text-red-500 mt-1">{errors.name?.message}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            placeholder="Email"
            {...register("email")}
          />
          {<p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {
            <p className="text-sm text-red-500 mt-1">
              {errors.password?.message}
            </p>
          }
        </div>

        <div className="mb-6">
          <label
            htmlFor="password_confirmation"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Password Confirmation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            placeholder="Password"
            type="password"
            {...register("passwordConfirmation")}
          />
          {
            <p className="text-sm text-red-500 mt-1">
              {errors.passwordConfirmation?.message}
            </p>
          }
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-emerald-400 rounded font-bold px-6 py-2 color text-white hover:bg-emerald-600"
            disabled={isSubmitting}
            type="submit"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="hover:text-emerald-400 underline decoration-solid"
          >
            Already a member ?
          </Link>
        </div>
      </form>
    </div>
  );
};
