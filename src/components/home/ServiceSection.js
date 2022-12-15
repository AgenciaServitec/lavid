import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { OffersServitec } from "../../images";

export const ServiceSection = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
}) => (
  <Container id="video-section">
    <div className="content-img">
      <img
        src={OffersServitec}
        alt="offers"
        className="image-bg"
        width="100%"
        height="100%"
      />
    </div>
    <div className="content-items">
      <div className="txt-item">
        <h2>Nuestro servicio</h2>
        <p>
          Somos una empresa que brinda servicios informáticos de forma integral
          en la asesoría y consultoría en hardware y software, tanto para
          usuarios domésticos, negocios y empresas corporativas. Prestamos
          nuestros servicios en forma altamente personalizada, comprendiendo que
          cada empresa es única, creando una solución a la medida de tus
          necesidades. Logrando identificar y entender las necesidades de
          nuestros clientes para ofrecerle la mejor solución.
        </p>
      </div>
      <div className="btn-item">
        <Button
          text="Contactanos"
          type="secondary"
          onClick={() => {
            onClickVisibleFormContact(true);
            onEventGaClickButton(
              "click-boton-contactanos",
              "Click boton contactanos"
            );
          }}
        />
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #f2f2f2;
  padding: 1.2rem;
  color: #000;
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  ${mediaQuery.minTablet} {
    padding: 3rem 4rem;
    grid-template-rows: 1fr;
    grid-template-columns: 45% 1fr;
  }

  .content-img {
    margin-top: 1rem;
    text-align: center;

    img {
      width: 70%;
      object-fit: contain;
    }
  }

  .content-items {
    display: flex;
    flex-direction: column;
    ${mediaQuery.minTablet} {
    }
    .txt-item {
      h2 {
        color: rgba(0, 0, 0, 0.54);
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 2rem;
      }
      p {
        color: #2f2c2c;
        max-width: 40rem;
        font-weight: 500;
      }
    }
    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
    }
  }
`;
