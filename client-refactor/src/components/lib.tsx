/** @jsxImportSource @emotion/react */

import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled/macro";

import { keyframes } from "@emotion/react";
import * as colors from "../styles/colors";

import { FaSpinner } from "react-icons/fa";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  "aria-label": "loading",
};

function FullPageSpinner() {
  return (
    <div
      css={{
        fontSize: "4em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const buttonVariants: { [key: string]: { background: string; color: string } } =
  {
    primary: {
      background: colors.base,
      color: "black",
    },
    secondary: {
      background: colors.emerald,
      color: colors.base,
    },
  };

const Button = styled.button(
  {
    padding: "10px 15px",
    border: "0",
    lineHeight: "1",
    borderRadius: "3px",
    fontWeight: "bold",
    ":hover": {
      backgroundColor: colors.base,
      color: colors.emerald,
    },
  },
  ({ variant = "primary" }: { variant: string }) => buttonVariants[variant]
);

const Link = styled(RouterLink)({
  padding: "10px 15px",
  border: "0",
  lineHeight: "1",
  borderRadius: "3px",
  backgroundColor: colors.gray20,
  fontWeight: "bold",
  textAlign: "center",
  ":hover": {
    backgroundColor: colors.base,
    color: colors.emerald,
  },
});

const PropertyList = styled.ul({
  listStyle: "none",
  margin: "1.5rem 0 0 0",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexFlow: "wrap",
  gap: "1rem",
});

const PropertyListItem = styled.li({
  flexBasis: "100%",
});

export {
  Link,
  Spinner,
  FullPageSpinner,
  PropertyList,
  PropertyListItem,
  Button,
};
