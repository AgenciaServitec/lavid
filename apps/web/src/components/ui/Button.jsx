import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten, rgba } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../styles/constants/index.js";
import { brandPalette } from "../../styles/themes/antdTheme";

const getVariantStyles = (theme, variant) => {
  const variants = {
    primary: {
      bg: theme.colors.primary,
      hoverBg: lighten(0.08, theme.colors.primary),
      activeBg: darken(0.04, theme.colors.primary),
      border: theme.colors.primary,
      color: theme.colors.secondary,
      focusRing: rgba(theme.colors.primary, 0.28),
    },
    secondary: {
      bg: brandPalette.grape,
      hoverBg: brandPalette.grapeHover,
      activeBg: brandPalette.grapeActive,
      border: brandPalette.grape,
      color: theme.colors.secondary,
      focusRing: rgba(brandPalette.grape, 0.28),
    },
    tertiary: {
      bg: theme.colors.sextiary,
      hoverBg: lighten(0.06, theme.colors.sextiary),
      activeBg: darken(0.08, theme.colors.sextiary),
      border: theme.colors.sextiary,
      color: theme.colors.secondary,
      focusRing: rgba(theme.colors.sextiary, 0.28),
    },
  };

  return variants[variant] || variants.primary;
};

export const Button = ({
  text,
  children,
  type = "primary",
  htmlType = "button",
  onClick,
  width = "auto",
  loading = false,
  disabled = false,
}) => {
  const isBlocked = disabled || loading;

  return (
    <Container
      type={htmlType}
      onClick={!isBlocked ? onClick : undefined}
      $width={width}
      $variant={type}
      $loading={loading}
      disabled={isBlocked}
      aria-busy={loading}
    >
      <span className="content-button">
        {loading && (
          <FontAwesomeIcon icon={faSpinner} spin className="item-icon" />
        )}
        {text ?? children}
      </span>
    </Container>
  );
};

const Container = styled.button`
  ${({ theme, $variant, $width, $loading }) => {
    const style = getVariantStyles(theme, $variant);

    return css`
      width: ${$width};
      padding: 0.65rem 1.5rem;
      border-radius: 10px;
      border: 1.5px solid ${style.border};
      background-color: ${style.bg};
      color: ${style.color};
      font-weight: ${theme.font_weight.medium};
      text-transform: uppercase;
      letter-spacing: 0.03em;
      font-size: 1.05rem;
      line-height: 1.2;
      cursor: pointer;
      user-select: none;
      outline: none;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.12s ease;

      ${mediaQuery.minTablet} {
        font-size: 1.25rem;
      }

      &:hover:not(:disabled) {
        background-color: ${style.hoverBg};
        border-color: ${style.hoverBg};
        box-shadow: 0 4px 12px ${rgba(style.bg, 0.25)};
      }

      &:focus-visible {
        box-shadow: 0 0 0 3px ${style.focusRing};
      }

      &:active:not(:disabled) {
        background-color: ${style.activeBg};
        border-color: ${style.activeBg};
        transform: scale(0.98);
        box-shadow: 0 2px 6px ${rgba(style.bg, 0.2)};
      }

      ${
        $loading &&
        css`
          &:disabled {
            opacity: 0.82;
            cursor: wait;
          }
        `
      }

      ${
        !$loading &&
        css`
          &:disabled {
            background-color: ${theme.colors.light};
            border-color: ${theme.colors.light};
            color: ${theme.colors.font3};
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
          }
        `
      }

      .content-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
      }
    `;
  }}
`;
