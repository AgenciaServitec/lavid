import React from "react";
import styled from "styled-components";
import { ImgLogoLavid, SvgLocation, SvgPhone } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { WrapperComponent } from "../ui";
import { contactData } from "../../firebase";

export const Footer = () => {
  const emailAddress = contactData?.email || "contacto@lavid.life";
  const tiktokUrl = contactData?.socials?.tiktok || "https://www.tiktok.com";
  const instagramUrl =
    contactData?.socials?.instagram || "https://www.instagram.com";

  return (
    <Container id="footer">
      <MainFooter>
        <WrapperComponent>
          <FooterGrid>
            {/* Columna 1: Logo, descripción y redes */}
            <BrandColumn>
              <div className="logo-box">
                <img src={ImgLogoLavid} alt="Logo La Vid Life" />
              </div>
              <p className="description">
                Bebe con alegre corazón. Disfruta del sabor de la uva sin
                alcohol, una alternativa 100% natural para tus celebraciones.
              </p>
              <ul className="socials">
                <li>
                  <a
                    href="https://www.facebook.com/ZumosdeUvaLavid/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
              </ul>
            </BrandColumn>

            {/* Columna 2: Enlaces rápidos */}
            <LinksColumn>
              <h3>ENLACES RÁPIDOS</h3>
              <ul>
                <li>
                  <a href="#services">Nuestros Productos</a>
                </li>
                <li>
                  <a href="#benefits">Beneficios para la Salud</a>
                </li>
                <li>
                  <a href="partners">Programa de Partners</a>
                </li>
                <li>
                  <a href="#contact">Contacto y Ubicación</a>
                </li>
              </ul>
            </LinksColumn>

            {/* Columna 3: Contacto directo */}
            <ContactColumn>
              <h3>CONTACTO DIRECTO</h3>
              <ul>
                <li>
                  <span className="icon-wrap" aria-hidden="true">
                    <SvgPhone width="18px" />
                  </span>
                  <a href={`tel:+51${contactData.numbers.phone}`}>
                    +51 {contactData.numbers.phone}
                  </a>
                </li>
                <li>
                  <span className="icon-wrap" aria-hidden="true">
                    ✉
                  </span>
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </li>
                <li>
                  <span className="icon-wrap" aria-hidden="true">
                    <SvgLocation width="18px" />
                  </span>
                  <a
                    href={contactData.directions.local1Link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contactData.directions.local1Name ||
                      "Ca. Coronel Bermúdez 113, Lima 15064, Perú"}
                  </a>
                </li>
              </ul>
            </ContactColumn>
          </FooterGrid>
        </WrapperComponent>
      </MainFooter>

      <BottomFooter>
        <WrapperComponent>
          <BottomBarContent>
            <p className="copyright">
              &copy; 2026 La Vid. Todos los derechos reservados.
            </p>
            <p className="credit">
              Diseñado con <FontAwesomeIcon icon={faHeart} color="#e11d48" />{" "}
              por {contactData.poweredBy.name}
            </p>
          </BottomBarContent>
        </WrapperComponent>
      </BottomFooter>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  background-color: #141414;
  color: #e5e5e5;
  box-sizing: border-box;
`;

const MainFooter = styled.div`
  padding: 4.5rem 0 3.5rem;

  ${mediaQuery.minTablet} {
    padding: 5rem 0 4rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.75rem;
  align-items: start;

  ${mediaQuery.minTablet} {
    grid-template-columns: 1.25fr 1fr 1.15fr;
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 4rem;
  }
`;

const BrandColumn = styled.div`
  .logo-box {
    display: inline-block;
    background-color: #ffffff;
    padding: 0.45rem 0.7rem;
    border-radius: 4px;
    margin-bottom: 1.25rem;

    img {
      display: block;
      height: 44px;
      width: auto;
      object-fit: contain;
    }
  }

  .description {
    max-width: 340px;
    margin: 0 0 1.5rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: #b3b3b3;
  }

  .socials {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.65rem;

    li a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #262626;
      color: #d4d4d4;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.95rem;
      text-decoration: none;
      transition:
        background-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;

      &:hover {
        background-color: #8e247a;
        color: #ffffff;
        transform: translateY(-2px);
      }
    }
  }
`;

const ColumnTitleMixin = `
  h3 {
    position: relative;
    margin: 0 0 1.5rem;
    padding-bottom: 0.65rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ffffff;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 28px;
      height: 2px;
      background-color: #8e247a;
    }
  }
`;

const LinksColumn = styled.div`
  ${ColumnTitleMixin}

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    li a {
      color: #b8b8b8;
      font-size: 0.92rem;
      line-height: 1.45;
      text-decoration: none;
      transition:
        color 0.2s ease,
        padding-left 0.2s ease;

      &:hover {
        color: #ffffff;
        padding-left: 4px;
      }
    }
  }
`;

const ContactColumn = styled.div`
  ${ColumnTitleMixin}

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.05rem;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.92rem;
      line-height: 1.5;

      .icon-wrap {
        flex-shrink: 0;
        width: 20px;
        margin-top: 2px;
        color: #9c2784;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
      }

      a {
        color: #c7c7c7;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }
`;

const BottomFooter = styled.div`
  background-color: #141414;
  padding: 1.35rem 0;

  > * > * {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 1.35rem;
  }
`;

const BottomBarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #7a7a7a;
  text-align: center;

  p {
    margin: 0;
  }

  ${mediaQuery.minTablet} {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;
