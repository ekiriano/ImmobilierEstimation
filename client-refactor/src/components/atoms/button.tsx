/** @jsxImportSource @emotion/react */

import { MouseEventHandler, ReactNode } from "react";
import { Button as StyledButton } from "../lib";

type Props = {
  variant: "primary" | "secondary";
  type: "button" | "reset" | "submit";
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  variant = "primary",
  type,
  children,
  onClick,
  className,
  disabled,
}: Props) => {
  return (
    <StyledButton
      variant={variant}
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
