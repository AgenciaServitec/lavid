
import React from "react";
import styled from "styled-components";
import { Carousel } from "./Carousel";
import { HeroContactForm } from "./HeroContactForm";

export const Hero = ({ onClickVisibleFormContact }) => {
    return (
        <HeroContainer>
            <CarouselBackground>
                <Carousel
                    onClickVisibleFormContact={onClickVisibleFormContact}
                />
            </CarouselBackground>

            <ContentWrapper>
                <FloatingFormContainer>
                    <HeroContactForm />
                </FloatingFormContainer>
            </ContentWrapper>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 750px;
    height: 100vh;
    max-height: 1000px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #f3f4f6;

    @media (max-width: 1023px) {
        height: auto;
        min-height: auto;
        max-height: none;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
`;

const CarouselBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    /* Forzar a todos los niveles internos de Slick a ocupar el 100% del alto */
    .slick-slider,
    .slick-list,
    .slick-track,
    .slick-slide,
    .slick-slide > div {
        height: 100% !important;
    }

    /* Asegurar que el div de tu ItemCarousel y su imagen cubran todo el espacio */
    .slick-slide img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        /* object-fit: cover evita que la imagen se deforme al estirarse */
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 2;
        pointer-events: none;
    }

    @media (max-width: 1023px) {
        position: relative;
        height: 100%;
        min-height: 500px; /* Un alto mínimo para móviles */
        &::after {
            display: none;
        }
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 2rem 4rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1023px) {
        width: 100%;
        padding: 0 1.25rem 2.5rem;
        margin-top: -2rem;
        justify-content: center;
    }

    @media (max-width: 480px) {
        padding: 0 1rem 2rem;
    }
`;

const FloatingFormContainer = styled.div`
    width: 100%;
    max-width: 450px;
    flex-shrink: 0;

    background: rgba(255, 255, 255, 0.97);
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);

    @media (max-width: 1023px) {
        max-width: 600px;
        border-radius: 20px;
    }

    @media (max-width: 480px) {
        border-radius: 16px;
    }
`;
