
import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { ItemCarousel } from "./ItemCarousel";

export const Carousel = ({ onClickVisibleFormContact }) => {
  return (
      <Container>
        <ItemCarousel
            onClickVisibleFormContact={onClickVisibleFormContact}
        />
      </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .ant-carousel,
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100% !important;
  }

  .slick-slide {
    overflow: hidden;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  ${mediaQuery.minDesktop} {
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      top: 46%;
      z-index: 20;
    }

    .slick-arrow.slick-prev {
      left: 3%;
    }

    .slick-arrow.slick-next {
      right: 3%;
    }
  }

  .slick-dots-bottom {
    bottom: 15px;

    ${mediaQuery.minDesktop} {
      bottom: 3rem;
    }
  }

  .slick-dots {
    display: none !important;

    ${mediaQuery.minTablet} {
      display: flex !important;
      justify-content: center;
    }

    li,
    li.slick-active {
      width: 34px;
    }

    li button {
      width: 34px;
      height: 5px;
    }
  }
`;
