/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled/macro";

import { keyframes } from "@emotion/react";
import * as colors from '../styles/colors';

import {FaSpinner} from "react-icons/fa";
const spin = keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'},
  })

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const buttonVariants: any = {
    primary: {
        background: colors.indigo,
        color: colors.base,
    },
    secondary: {
        background: colors.indigo,
        color: colors.base,
    }
}
  const Link = styled(RouterLink)({
        padding: '10px 15px',
        border: '0',
        lineHeight: '1',
        borderRadius: '3px',
        backgroundColor: colors.gray20,
        fontWeight: 'bold',
        textAlign: 'center',
        ":hover": {
            backgroundColor: colors.base,
            color: colors.emerald
        }

  }, 
  )

  export { Link }