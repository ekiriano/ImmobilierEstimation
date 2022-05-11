/** @jsxImportSource @emotion/react */
import { ComponentProps, forwardRef } from "react";
import { FieldError } from "../molecules/Form";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, type = "text", ...props },
  ref
) {
  return (
    <div css={{ margin: "2rem 0" }}>
      <label htmlFor={label}>{label}</label>
      <input
        css={{
          width: "100%",
          padding: "8px",
          margin: "5px 0",
          display: "inline-block",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
        }}
        type={type}
        ref={ref}
        {...props}
      />
      <FieldError name={props.name} />
    </div>
  );
});
