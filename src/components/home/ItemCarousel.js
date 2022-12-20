import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { ImgCarousel } from "../../images";

export const ItemCarousel = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
}) => {
  return (
    <Container>
      <img src={ImgCarousel} alt="Vino" />
      <div className="content-item">
        <div className="first-content">
          <div className="txt-items">
            <h1>Bebe con alegre corazón</h1>
            <h2>0% de alcohol</h2>
          </div>
          <div
            className="btn-item"
            onClick={() => {
              onClickVisibleFormContact(true);
              onEventGaClickButton(
                "click-boton-cotizar",
                "Click boton cotizar"
              );
            }}
          >
            <Button text="Contactar" type="secondary" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }

  .content-item {
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 5%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 1250px;
    height: 100%;
    margin: auto;
    padding: 1rem;
    ${mediaQuery.minTablet} {
      grid-template-columns: 45% 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1.7rem;
      padding: 1.7rem 2rem;
    }
  }

  .first-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mediaQuery.minTablet} {
      padding-top: 1rem;
    }

    .txt-items {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: start;

      h1 {
        font-size: 2.3rem;
        line-height: 2.2rem;
        color: #fff;
        ${mediaQuery.minTablet} {
          font-size: 3.5rem;
          line-height: 3rem;
        }
      }
      h2 {
        color: #fff;
        ${mediaQuery.minTablet} {
          font-size: 3.5rem;
          line-height: 3rem;
        }
      }
    }

    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
    }
  }

  .second-content {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
      max-width: 23rem;
      object-fit: contain;
      ${mediaQuery.minTablet} {
        width: 90%;
      }
    }
  }
`;
