import React from "react";
import styled from "styled-components";
import {Carousel} from "./Carousel";

export const Hero = ({ onClickVisibleFormContact }) => {
    return (
        <HeroContainer>
            <CarouselBackground>
                <Carousel
                    onClickVisibleFormContact={onClickVisibleFormContact}
                />
            </CarouselBackground>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    height: clamp(460px, 68vh, 650px);
    overflow: hidden;
    display: flex;
    align-items: center;
    background: transparent;

    @media (max-width: 1023px) {
        height: auto;
        min-height: unset;
        display: block;
    }
`;

const CarouselBackground = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .slick-slider,
    .slick-list,
    .slick-track,
    .slick-slide,
    .slick-slide > div {
        height: 100% !important;
    }

    .slick-slide img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center !important;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 2;
        pointer-events: none;
    }

    @media (max-width: 1023px) {
        position: relative;
        height: auto;
        min-height: unset;

        &::after {
            display: none;
        }
    }
`;