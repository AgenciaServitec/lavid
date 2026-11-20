import React from "react";
import styled, { css } from "styled-components";
import { Space as SpaceAntd } from "antd";

export const Form = ({
  children,
  size = "large",
  marginTop = "1rem",
  ...props
}) => (
  <FormStyled noValidate autoComplete="off" {...props}>
    <SpaceStyled size={size} direction="vertical" $marginTop={marginTop}>
      {children}
    </SpaceStyled>
  </FormStyled>
);

const FormStyled = styled.form`
  width: 100%;
`;

const SpaceStyled = styled(SpaceAntd)`
  ${({ $marginTop }) => css`
    width: 100%;
    margin-top: ${$marginTop};

    .ant-space-item {
      width: 100%;
    }
  `}
`;
