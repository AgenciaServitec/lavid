import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { ItemCarousel } from "./ItemCarousel";

export const Carousel = ({ onClickVisibleFormContact }) => {
  return (
    <Container>
      <ItemCarousel onClickVisibleFormContact={onClickVisibleFormContact} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  ${mediaQuery.minDesktop} {
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      top: 46%;
    }

    .ant-carousel .slick-next,
    .ant-carousel .slick-next {
      top: 46%;
    }

    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      color: white;
      z-index: 99999;
    }

    .slick-arrow.slick-prev {
      left: 3%;
    }

    .slick-arrow.slick-next {
      right: 3%;
    }
  }

  .slick-dots-bottom {
    bottom: 1px;

    ${mediaQuery.minDesktop} {
      bottom: 4rem;
    }
  }

  .slick-dots {
    display: none !important;

    ${mediaQuery.minTablet} {
      display: flex !important;
    }

    li.slick-active {
      width: 48px;
    }

    li {
      width: 48px;

      button {
        width: 48px;
        height: 7px;
      }
    }

    ${mediaQuery.minTablet} {
      li.slick-active {
        width: 34px;
      }

      li {
        width: 34px;

        button {
          width: 34px;
          height: 5px;
        }
      }
    }
  }

  ${mediaQuery.minDesktop} {
    display: inherit;
  }
`;
