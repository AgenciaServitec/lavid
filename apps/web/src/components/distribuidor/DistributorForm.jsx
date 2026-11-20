import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Col, Row } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { rgba } from "polished";
import { useDevice, useFormUtils } from "../../hooks";
import { mediaQuery } from "../../styles/constants/index.js";
import { Button, Form, Input, notification, TextArea } from "../ui";

const schema = yup.object({
  nombre: yup.string().trim().required("El nombre es obligatorio"),
  correo: yup
    .string()
    .trim()
    .email("Ingrese un correo valido")
    .required("El correo es obligatorio"),
  celular: yup
    .string()
    .trim()
    .matches(/^\d{9}$/, "El celular debe tener 9 digitos")
    .required("El celular es obligatorio"),
  dni: yup
    .string()
    .trim()
    .matches(/^\d{8}$/, "El DNI debe tener 8 digitos")
    .required("El DNI es obligatorio"),
  ruc: yup
    .string()
    .trim()
    .transform((value) => (value === "" ? undefined : value))
    .matches(/^\d{11}$/, "El RUC debe tener 11 digitos")
    .notRequired(),
  direccion: yup.string().trim().required("La direccion es obligatoria"),
  ubicacion: yup.string().trim().required("La ubicacion es obligatoria"),
  mensaje: yup.string().trim().required("Cuentanos sobre tu proyecto"),
});

export const DistributorForm = ({ onSubmit }) => {
  const { isMobile } = useDevice();
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nombre: "",
      correo: "",
      celular: "",
      dni: "",
      ruc: "",
      direccion: "",
      ubicacion: "",
      mensaje: "",
    },
  });

  const { required, error } = useFormUtils({ errors, schema });

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);

      if (onSubmit) {
        await onSubmit(formData);
      } else {
        const [firstName, ...restName] = formData.nombre.trim().split(" ");
        const contact = {
          firstName,
          lastName: restName.join(" ") || "-",
          email: formData.correo,
          phone: {
            number: Number(formData.celular),
            countryCode: "+51",
          },
          message: [
            `[Solicitud Partner]`,
            `DNI: ${formData.dni}`,
            formData.ruc ? `RUC: ${formData.ruc}` : null,
            `Dirección: ${formData.direccion}`,
            `Ubicación: ${formData.ubicacion}`,
            `Proyecto: ${formData.mensaje}`,
          ]
            .filter(Boolean)
            .join(" | "),
          hostname: "lavid.life",
        };

        const response = await fetch(
          "https://api-servitecsales.web.app/emails/contact",
          {
            method: "POST",
            headers: {
              "content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ contact }),
          }
        );

        if (!response.ok) throw new Error(response.statusText);
      }

      notification({
        type: "success",
        title: "Solicitud enviada exitosamente",
      });
      reset();
    } catch (e) {
      console.error("Error partner form:", e);
      notification({ type: "error", placement: "topLeft" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardContainer>
      <Header>
        <h2>Conviértete en Partner de La Vid</h2>
        <AccentLine />
        <p>
          Lleva nuestra selección de vinos 100% sin alcohol a tu espacio,
          restaurante o comunidad. Completa tus datos y conversemos.
        </p>
      </Header>

      <Form onSubmit={handleSubmit(handleFormSubmit)} marginTop="0">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Controller
              name="nombre"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Nombre completo"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col xs={24} md={12}>
            <Controller
              name="correo"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  type="email"
                  label="Correo electrónico"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col xs={24} md={12}>
            <Controller
              name="celular"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  type="tel"
                  inputMode="numeric"
                  maxLength={9}
                  label="Celular"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col xs={24} md={12}>
            <Controller
              name="dni"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  inputMode="numeric"
                  maxLength={8}
                  label="DNI"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col span={24}>
            <Controller
              name="ruc"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  inputMode="numeric"
                  maxLength={11}
                  label="RUC (opcional si aún no cuentas con empresa)"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col xs={24} md={12}>
            <Controller
              name="direccion"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Dirección"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col xs={24} md={12}>
            <Controller
              name="ubicacion"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ubicación (Ciudad, Distrito)"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col span={24}>
            <Controller
              name="mensaje"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <TextArea
                  rows={3}
                  label="Cuéntanos sobre tu proyecto"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  disabled={loading}
                  isMobile={isMobile}
                />
              )}
            />
          </Col>

          <Col span={24}>
            <HelperNote>
              * Los pedidos para partners aplican a partir de 2 cajas en
              adelante.
            </HelperNote>
          </Col>

          <Col span={24}>
            <Button
              type="primary"
              htmlType="submit"
              width="100%"
              loading={loading}
              disabled={loading}
              text="Quiero ser partner"
            />
          </Col>
        </Row>
      </Form>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    background-color: ${theme.colors.secondary};
    border-radius: 14px;
    padding: 2rem 1.25rem;
    border: 1px solid ${theme.colors.light};
    box-shadow: 0 10px 30px ${rgba(theme.colors.primary, 0.06)};
    box-sizing: border-box;

    ${mediaQuery.minTablet} {
      padding: 2.75rem 2.5rem;
    }
  `}
`;

const Header = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.65rem;
      font-weight: ${theme.font_weight.large};
      color: ${theme.colors.primary};
      line-height: 1.25;

      ${mediaQuery.minTablet} {
        font-size: 2rem;
      }
    }

    p {
      margin: 0 auto;
      max-width: 520px;
      font-size: 0.96rem;
      font-weight: ${theme.font_weight.small};
      color: ${theme.colors.quaternary};
      line-height: 1.55;
    }
  `}
`;

const AccentLine = styled.div`
  ${({ theme }) => css`
    width: 44px;
    height: 3px;
    background-color: ${theme.colors.sextiary};
    border-radius: 3px;
    margin: 0 auto 1rem;
  `}
`;

const HelperNote = styled.p`
  ${({ theme }) => css`
    margin: -0.25rem 0 0.5rem;
    font-size: 0.82rem;
    font-weight: ${theme.font_weight.small};
    color: ${theme.colors.font3};
  `}
`;
