import React from "react";
import { InputNumber as InputNumberAntd } from "antd";
import { ComponentContainer } from "./component-container";

export const InputNumber = ({
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
  inputMode = "decimal",
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
      <InputNumberAntd
        id={inputId}
        bordered={false}
        placeholder=" "
        inputMode={inputMode}
        autoComplete="chrome-off"
        size={isMobile ? "middle" : "large"}
        value={value}
        disabled={disabled}
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
