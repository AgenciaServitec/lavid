import React from "react";
import styled, { css } from "styled-components";
import { imgbotellabeneficios } from "../../images";

const BENEFITS_LIST = [
  "Vitaminas C, A, B6, B2, E",
  "Regula el tránsito intestinal",
  "Minerales: Potasio, Calcio, Magnesio",
  "Diurético natural",
  "Depurador y desintoxicante",
  "Mejora el sistema inmunológico",
];

export const Benefits = () => {
  return (
    <Section id="benefits">
      <Container>
        <ImageWrapper>
          <img
            src={imgbotellabeneficios}
            alt="Zumo de uva Borgoña La Vid Life"
          />
        </ImageWrapper>

        <ContentWrapper>
          <h2>Zumo de uva Borgoña "La Vid Life"</h2>
          <p className="subtitle">
            100% Natural y apto para todas las edades. Una alternativa saludable
            y deliciosa.
          </p>

          <BenefitsGrid>
            {BENEFITS_LIST.map((benefit, index) => (
              <BenefitItem key={index}>
                <CheckIcon viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </CheckIcon>
                <span>{benefit}</span>
              </BenefitItem>
            ))}
          </BenefitsGrid>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: #e1e1e6;
  padding: 5rem 5%;
  scroll-margin-top: 80px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 3.75rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 2.75rem 1.25rem;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.15fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }

  @media (max-width: 600px) {
    gap: 1.75rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1.05;
    object-fit: cover;
    border-radius: 20px;
    display: block;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 960px) {
    max-width: 380px;
  }

  @media (max-width: 600px) {
    max-width: 100%;

    img {
      aspect-ratio: 4 / 3;
      border-radius: 16px;
    }
  }
`;

const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Inter", "Segoe UI", Arial, sans-serif;

    h2 {
      font-size: clamp(1.85rem, 3vw, 2.5rem);
      font-weight: 700;
      color: #2b2927;
      margin: 0 0 0.85rem;
      line-height: 1.2;
    }

    .subtitle {
      font-size: clamp(1rem, 1.3vw, 1.125rem);
      color: #5c5854;
      margin: 0 0 2.25rem;
      line-height: 1.5;
    }

    @media (max-width: 960px) {
      align-items: center;
      text-align: center;

      .subtitle {
        max-width: 540px;
        margin-bottom: 1.75rem;
      }
    }

    @media (max-width: 600px) {
      align-items: flex-start;
      text-align: left;

      h2 {
        font-size: clamp(1.6rem, 7vw, 2rem);
      }

      .subtitle {
        margin-bottom: 1.5rem;
      }
    }
  `}
`;

const BenefitsGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 2rem;

  @media (max-width: 960px) {
    max-width: 580px;
    text-align: left;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.98rem;
  color: #3d3a37;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const CheckIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #6b5e54;
`;
