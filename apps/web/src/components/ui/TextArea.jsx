import React from "react";
import { Input as InputAntd } from "antd";
import { ComponentContainer } from "./component-container";

const { TextArea: TextAreaAntd } = InputAntd;

export const TextArea = ({
  value,
  required = false,
  hidden = false,
  disabled = false,
  error,
  label,
  variant = "outlined",
  isMobile = false,
  animation = false,
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
      disabled={disabled}
      error={error}
      label={label}
      animation={animation}
      bgColor={bgColor}
      componentId={inputId}
    >
      <TextAreaAntd
        id={inputId}
        bordered={false}
        placeholder=" "
        value={value}
        disabled={disabled}
        autoComplete="chrome-off"
        size={isMobile ? "middle" : "large"}
        style={
          variant === "filled"
            ? { paddingTop: "18px", paddingBottom: "6px", ...style }
            : style
        }
        {...props}
      />
    </Container>
  );
};
