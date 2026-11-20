import React from "react";
import { Input as InputAntd } from "antd";
import { ComponentContainer } from "./component-container";

export const Input = ({
  value,
  required = false,
  hidden = false,
  isMobile = false,
  error,
  label,
  variant = "outlined",
  disabled = false,
  animation,
  bgColor,
  componentId,
  style,
  ...props
}) => {
  const Container = ComponentContainer[variant] || ComponentContainer.outlined;
  const inputId = componentId || props.id;

  return (
    <Container
      value={value}
      required={required}
      hidden={hidden}
      error={error}
      label={label}
      disabled={disabled}
      animation={animation}
      bgColor={bgColor}
      componentId={inputId}
    >
      <InputAntd
        id={inputId}
        bordered={false}
        autoComplete="chrome-off"
        size={isMobile ? "middle" : "large"}
        placeholder=""
        value={value}
        disabled={disabled}
        allowClear={!disabled}
        style={
          variant === "filled"
            ? { paddingTop: "14px", paddingBottom: "2px", ...style }
            : style
        }
        {...props}
      />
    </Container>
  );
};
