import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui";

export const AboutUs = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
  onEventGaClickVideos,
}) => {
  return (
    <Container id="about-us">
      <div className="content-items">
        <div className="content">
          <div className="heading">
            <h2 className="title">
              Ofrecemos una gama completa de servicios de marketing digital.
            </h2>
          </div>
          <div className="description">
            Somos una agencia con experiencia en todas las dimensiones del
            marketing digital, utilizando estrategias, conociendo sus
            necesidades, involucrándonos para los mejores resultados para sus
            conversiones en gustos y preferencias de tu target.
          </div>
          <div className="list-about">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                MOTORES DE BUSQUEDA
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                PALABRAS CLAVES
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                META TAGS
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                CONTENIDO - ARQUITECTURA
              </li>
            </ul>
          </div>
          <div className="button">
            <Button
              text="Consigue una Cotización"
              type="tertiary"
              onClick={() => {
                onEventGaClickButton(
                  "click-boton-consigue-una-cotizacion",
                  "Click boton consigue una cotizacion"
                );
                onClickVisibleFormContact(true);
              }}
            />
          </div>
        </div>
        <div className="content-video">
          {/*<video*/}
          {/*  ref={refVideo}*/}
          {/*  className="item-video"*/}
          {/*  allowFullScreen={true}*/}
          {/*  controls*/}
          {/*  src={videoUrl}*/}
          {/*  onClick={() =>*/}
          {/*    onEventGaClickVideos(*/}
          {/*      "click-video-publicidad-google",*/}
          {/*      "Click video publicidad google"*/}
          {/*    )*/}
          {/*  }*/}
          {/*/>*/}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1.2rem;
  color: #000;
  ${mediaQuery.minTablet} {
    padding: 3rem 4rem;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 3rem 0.5rem;
    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
    }
    .title {
      color: rgba(0, 0, 0, 0.54);
      font-weight: 400;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .description {
      color: #2f2c2c;
      max-width: 40rem;
      font-weight: 500;
    }
    .list-about {
      margin: 1rem 1.5rem;
      ul {
        li {
          width: auto;
          background: transparent;
          color: #2f2c2c;
          list-style: none;
          margin-bottom: 0.5rem;
          svg {
            margin-right: 0.7rem;
          }
        }
      }
    }
  }
  .content-video {
    .item-video {
      width: 100%;
      height: 100%;
    }
  }
`;
