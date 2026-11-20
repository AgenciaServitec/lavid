import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const Spinner = ({ height, fullscreen = true, size = "6x", color }) => (
  <Container
    $fullscreen={fullscreen}
    $height={height}
    role="status"
    aria-live="polite"
    aria-label="Cargando"
  >
    <IconStyled spin icon={faCircleNotch} size={size} $color={color} />
  </Container>
);

const Container = styled.section`
  ${({ $fullscreen, $height }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${$height || ($fullscreen ? "100%" : "calc(100% - 90px)")};
    opacity: 0.9;
  `}
`;

const IconStyled = styled(FontAwesomeIcon)`
  ${({ theme, $color }) => css`
    color: ${$color || theme.colors.primary};
  `}
`;
