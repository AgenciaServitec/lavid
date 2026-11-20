import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { rgba } from "polished";
import {
  ContactSection,
  Hero,
  Services,
  WineCharacters,
} from "../../components";
import { FormContact, WrapperComponent } from "../../components/ui";
import { useAnalyticsEventTracker } from "../../hooks";
import { BannerPartnerLaVid, BannerPartnerMovilLaVid } from "../../images";
import { mediaQuery } from "../../styles/constants/index.js";
import { Benefits } from "../../components/home/Benefits.jsx";

export const Home = ({
  onClickVisibleFormContact,
  oneChangeMessageCustom,
  visibleFormContact,
  onEventGaClickButton,
  messageCustom,
}) => {
  const gaEventTrackerIcons = useAnalyticsEventTracker("Icons");

  const eventGaClickIcon = (action, label) =>
    gaEventTrackerIcons(action, label);

  return (
    <>
      <Container>
        <Hero onClickVisibleFormContact={onClickVisibleFormContact} />

        <SectionsFlow>
          <WrapperComponent>
            <Services
              onClickVisibleFormContact={onClickVisibleFormContact}
              onEventGaClickButton={onEventGaClickButton}
              oneChangeMessageCustom={oneChangeMessageCustom}
            />
          </WrapperComponent>

          <WrapperComponent>
            <WineCharacters />
          </WrapperComponent>

          <WrapperComponent>
            <Benefits id="benefits" />

            {/*<BannerSection >
              <SectionHeader>
                <h2>Beneficios en cada copa</h2>
                <p>
                  Todo lo bueno de la uva natural en una bebida saludable y 0%
                  alcohol.
                </p>
              </SectionHeader>

              <PropertiesBannerCard>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={BannerPropertiesLaVid}
                  />
                  <img
                    src={BannerPropertiesMovilLaVid}
                    alt="Banner de sus propiedades del vino La Vid"
                    loading="lazy"
                  />
                </picture>
              </PropertiesBannerCard>
            // </BannerSection>*/}
          </WrapperComponent>

          <WrapperComponent>
            <BannerSection>
              <SectionHeader>
                <h2>Sé parte de nuestros Partners</h2>
                <p>
                  Lleva nuestro vino sin alcohol a tu restaurante, tienda o
                  negocio.
                </p>
              </SectionHeader>

              <PartnerBannerLink to="/partners">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={BannerPartnerLaVid}
                  />
                  <img
                    src={BannerPartnerMovilLaVid}
                    alt="Banner de Partners"
                    loading="lazy"
                  />
                </picture>
              </PartnerBannerLink>
            </BannerSection>
          </WrapperComponent>

          <WrapperComponent>
            <ContactSection />
          </WrapperComponent>
        </SectionsFlow>
      </Container>

      <FormContact
        visibleFormContact={visibleFormContact}
        onClickVisibleFormContact={onClickVisibleFormContact}
        onEventGaClickIcon={eventGaClickIcon}
        onEventGaClickButton={onEventGaClickButton}
        oneChangeMessageCustom={oneChangeMessageCustom}
        messageCustom={messageCustom}
      />
    </>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    background-color: ${theme.colors.secondary};
  `}
`;

const SectionsFlow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 0 3rem;

  ${mediaQuery.minTablet} {
    gap: 4rem;
    padding: 4rem 0 4.5rem;
  }
`;

const BannerSection = styled.section`
  width: 100%;
`;

const SectionHeader = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 0 auto clamp(1.5rem, 3vw, 2.25rem);
    max-width: 620px;
    padding: 0 1rem;

    h2 {
      margin: 0 0 0.65rem;
      color: ${theme.colors.sextiary};
      font-size: clamp(1.6rem, 3.2vw, 2.3rem);
      font-weight: ${theme.font_weight.large};
      line-height: 1.25;
    }

    p {
      margin: 0;
      color: ${theme.colors.quaternary};
      font-size: clamp(0.95rem, 1.4vw, 1.08rem);
      font-weight: ${theme.font_weight.small};
      line-height: 1.55;
    }
  `}
`;

const bannerCardBase = css`
  ${({ theme }) => css`
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 24px ${rgba(theme.colors.primary, 0.08)};

    ${mediaQuery.minTablet} {
      border-radius: 14px;
    }

    @media (min-width: 1024px) {
      max-width: 100%;
    }

    picture,
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  `}
`;

const PropertiesBannerCard = styled.div`
  ${bannerCardBase}
`;

const PartnerBannerLink = styled(Link)`
  ${({ theme }) => css`
    display: block;
    ${bannerCardBase};
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px ${rgba(theme.colors.primary, 0.14)};
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${rgba(theme.colors.sextiary, 0.35)};
    }
  `}
`;
