
import React from "react";
import styled from "styled-components";
import { ImgCarousel } from "../../images";

export const ItemCarousel = ({ onClickVisibleFormContact }) => (
    <Container $bgImage={ImgCarousel}>
        <div className="content-item">
            <div className="first-content">
                <div className="txt-items">
                    <h1>Bebe con alegre corazón</h1>
                    <h2>0% de alcohol</h2>
                </div>
            </div>
        </div>
    </Container>
);

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;

    background-image: url(${({ $bgImage }) => $bgImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    .content-item {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-height: inherit;

        display: flex;
        align-items: center;

        padding: 3rem 5%;

        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.62) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            rgba(0, 0, 0, 0.12) 100%
        );
    }

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
            font-weight: 700;
            color: #fff;
            margin: 0 0 1.2rem;
        }

        h2 {
            color: #fff;
            font-size: clamp(1.5rem, 2.5vw, 2.5rem);
            line-height: 1.2;
            font-weight: 400;
            margin: 0 0 1.5rem;
        }
    }

    .btn-item {
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
    }

    @media (max-width: 1023px) {
        .content-item {
            padding: 2.5rem 7%;
        }

        .first-content {
            max-width: 550px;
        }

        .txt-items h1 {
            font-size: clamp(2rem, 5vw, 3.2rem);
        }
    }

    @media (max-width: 600px) {
        background-position: center center;

        .content-item {
            padding: 2rem 1.5rem;
        }

        .first-content {
            max-width: 100%;
        }

        .txt-items h1 {
            font-size: clamp(2rem, 9vw, 2.7rem);
            line-height: 1.12;
            margin-bottom: 1rem;
        }

        .txt-items h2 {
            font-size: 1.6rem;
            margin-bottom: 1.3rem;
        }
    }
`;
