import React from "react";
import styled, { css } from "styled-components";
import { capitalize, get, isEmpty, startCase, toString } from "lodash";
import { Typography } from "antd";
import { lighten, rgba } from "polished";
import { classNames } from "../../../styles";
import { keyframes } from "../../../styles/constants/index.js";

const { Text } = Typography;

export const Filled = ({
  value,
  required = false,
  error,
  hidden = false,
  label,
  children,
  componentId,
  animation = true,
  disabled = false,
  bgColor,
}) => {
  const hasValue =
    typeof value === "object" ? !isEmpty(value) : !!toString(value);

  return (
    <>
      <Container
        $hasValue={hasValue}
        $error={!!error}
        $disabled={disabled}
        $required={required}
        $hidden={hidden}
        $animation={animation}
        $bgColor={bgColor}
        className={classNames({ "scroll-error-anchor": error })}
      >
        <div className="item-wrapper">{children}</div>
        <label htmlFor={componentId} className="item-label">
          {label}
        </label>
      </Container>
      {error && (
        <ErrorText $error={!!error}>
          {capitalize(startCase(get(error, "message")))}
        </ErrorText>
      )}
    </>
  );
};

const labelAnimate = css`
  top: 4px;
  left: 11px;
  bottom: auto;
  padding: 0;
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.font_weight.large};
  letter-spacing: 0.01em;
`;

const Container = styled.div`
  ${({
    theme,
    $error,
    $required,
    $disabled,
    $hasValue,
    $animation,
    $hidden,
    $bgColor,
  }) => {
    const activeColor = $error
      ? theme.colors.error
      : lighten(0.1, theme.colors.primary);

    const baseBg = $disabled
      ? theme.colors.light
      : $bgColor || theme.colors.white;

    return css`
      position: relative;
      width: 100%;
      border-radius: 10px;
      background-color: ${baseBg};
      border: 1.5px solid
        ${
          $error
            ? theme.colors.error
            : $disabled
              ? theme.colors.light
              : theme.colors.gray
        };
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        background-color 0.2s ease;

      ${
        $error &&
        css`
          animation: ${keyframes.shake} 340ms
            cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        `
      }

      /* Estado Hover */
      &:hover:not(:focus-within) {
        border-color: ${$disabled ? theme.colors.light : activeColor};

        .item-label,
        .item-label::after {
          color: ${$disabled ? theme.colors.font3 : activeColor};
        }
      }

      &:focus-within,
      &:has(input:not(:placeholder-shown)),
      &:has(textarea:not(:placeholder-shown)) {
        .item-label,
        .item-label::after {
          ${labelAnimate};
        }
      }

      &:focus-within {
        border-color: ${activeColor};
        box-shadow: 0 0 0 3px
          ${rgba($error ? theme.colors.error : theme.colors.primary, 0.15)};

        .item-label,
        .item-label::after {
          color: ${activeColor};
        }
      }

      .item-label {
        position: absolute;
        top: 0;
        left: 11px;
        bottom: 0;
        z-index: 10;
        pointer-events: none;
        display: ${$hidden ? "none" : "flex"};
        align-items: center;
        background-color: transparent;
        color: ${
          $error
            ? theme.colors.error
            : $disabled
              ? theme.colors.font3
              : theme.colors.quaternary
        };
        font-size: ${theme.font_sizes.small};
        font-weight: ${theme.font_weight.small};
        transition:
          top 0.15s ease,
          font-size 0.15s ease,
          color 0.15s ease;

        ${
          (!$animation || $hasValue) &&
          css`
            ${labelAnimate};
            color: ${$error ? theme.colors.error : theme.colors.font3};
          `
        }

        ${
          $required &&
          css`
            &::after {
              display: inline-block;
              margin-left: 0.2rem;
              color: ${$error ? theme.colors.error : theme.colors.error};
              font-size: inherit;
              line-height: 1;
              content: "*";
            }
          `
        }
      }

      .item-wrapper {
        border-radius: 10px;
        overflow: hidden;

        input:-webkit-autofill {
          -webkit-text-fill-color: ${theme.colors.primary};
          transition: background-color 5000s ease-in-out 0s;
        }

        .ant-input-number,
        .ant-picker,
        .ant-select,
        .ant-select-selector,
        .ant-input-affix-wrapper,
        .ant-input {
          width: 100%;
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          outline: none !important;
        }

        .ant-input-group-addon {
          border: 0 solid ${theme.colors.light};
          border-left: 1px solid ${theme.colors.light};
          background: transparent;
        }
      }
    `;
  }}
`;

const ErrorText = styled(Text)`
  ${({ $error, theme }) => css`
    display: block;
    margin-top: 0.25rem;
    padding-left: 0.25rem;
    color: ${theme.colors.error};
    font-size: 0.75rem;
    font-weight: ${theme.font_weight.medium};

    ${
      $error &&
      css`
        animation: ${keyframes.shake} 340ms;
      `
    }
  `}
`;
