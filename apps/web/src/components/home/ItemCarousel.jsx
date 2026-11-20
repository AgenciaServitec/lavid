import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { ImgCarousel } from "../../images";

export const ItemCarousel = ({
  image = ImgCarousel,
  alt = "Vino sin alcohol La Vid",
  title = "Bebe con alegre corazón",
  subtitle = "0% de alcohol",
  isFirst = false,
}) => (
  <Container>
    <HeroImage
      src={image}
      alt={alt}
      loading={isFirst ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />

    <OverlayContent>
      <div className="first-content">
        <div className="txt-items">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </OverlayContent>
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: saturate(1.06) contrast(1.03);
  pointer-events: none;
`;

const OverlayContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 3rem 5%;
    background: linear-gradient(
      90deg,
      ${rgba(theme.colors.primary, 0.62)} 0%,
      ${rgba(theme.colors.primary, 0.25)} 45%,
      transparent 78%
    );

    .first-content {
      width: 100%;
      max-width: 620px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .txt-items {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        max-width: 580px;
        font-size: clamp(2.2rem, 4vw, 3.8rem);
        line-height: 1.12;
        font-weight: ${theme.font_weight.large};
        color: ${theme.colors.secondary};
        margin: 0 0 1rem;
        text-shadow: 0 2px 12px ${rgba(theme.colors.black, 0.28)};
      }

      h2 {
        color: ${theme.colors.secondary};
        font-size: clamp(1.45rem, 2.4vw, 2.3rem);
        line-height: 1.2;
        font-weight: ${theme.font_weight.small};
        margin: 0;
        text-shadow: 0 2px 10px ${rgba(theme.colors.black, 0.25)};
      }
    }

    @media (max-width: 1023px) {
      padding: 2.5rem 7%;

      .first-content {
        max-width: 550px;
      }

      .txt-items h1 {
        font-size: clamp(2rem, 5vw, 3.2rem);
      }
    }

    @media (max-width: 600px) {
      padding: 2rem 1.5rem 3.25rem;
      background: linear-gradient(
        180deg,
        ${rgba(theme.colors.primary, 0.48)} 0%,
        ${rgba(theme.colors.primary, 0.28)} 55%,
        ${rgba(theme.colors.primary, 0.45)} 100%
      );

      .first-content {
        max-width: 100%;
      }

      .txt-items h1 {
        font-size: clamp(1.9rem, 8.5vw, 2.6rem);
        line-height: 1.12;
        margin-bottom: 0.75rem;
      }

      .txt-items h2 {
        font-size: 1.45rem;
      }
    }
  `}
`;
