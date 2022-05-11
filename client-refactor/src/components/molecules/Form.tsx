/** @jsxImportSource @emotion/react */
import { yupResolver } from "@hookform/resolvers/yup";

import { ComponentProps } from "react";
import {
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";

import { TypeOf, AnyObjectSchema } from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface UseFormProps<T extends AnyObjectSchema>
  extends UseHookFormProps<TypeOf<T>> {
  schema: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = <T extends AnyObjectSchema>({
  schema,
  ...formConfig
}: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: yupResolver(schema),
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<FieldValues>;
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
          <fieldset
            css={{ width: "100%" }}
            disabled={form.formState.isSubmitting}
          >
            {children}
          </fieldset>
        </form>
      }
    </FormProvider>
  );
};

export function FieldError({ name }: { name?: string }) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const error = errors[name];

  if (!error) return null;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return <p css={{ color: "red", fontSize: "smaller" }}>{error.message}</p>;
}
