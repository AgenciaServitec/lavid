import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { ImgCarousel } from "../../images";

export const ItemCarousel = ({ onClickVisibleFormContact }) => (
  <Container $bgImage={ImgCarousel}>
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
          }}
        >
          <Button text="Contactar" type="secondary" />
        </div>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ $bgImage }) => $bgImage});
  width: 100%;
  height: auto;

  .content-item {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      359deg,
      rgb(6 6 6 / 82%) 0%,
      rgba(18, 17, 17, 0.247) 35%,
      rgb(23 23 23 / 65%) 100%
    );
    display: grid;
    grid-gap: 1rem;
    padding: 2.5em 1em;
    ${mediaQuery.minTablet} {
      grid-template-columns: 45% 1fr;
      grid-template-rows: 1fr;
      grid-gap: 1.7rem;
      padding: 4em 2.5em;
    }

    ${mediaQuery.minDesktop} {
      height: 70vh;
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
        font-size: 2rem;
        line-height: 2.2rem;
        font-weight: 600;
        color: #fff;
        ${mediaQuery.minTablet} {
          font-size: 3.5rem;
          line-height: 4rem;
        }
      }
      h2 {
        color: #fff;
        font-size: 1.5em;
        font-weight: 400;
        ${mediaQuery.minTablet} {
          font-size: 2.5rem;
        }
      }
    }

    .btn-item {
      width: 100%;
      display: flex;
      justify-content: start;
    }
  }
`;
