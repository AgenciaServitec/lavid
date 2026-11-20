import React from "react";
import styled from "styled-components";
import { Carousel } from "./Carousel.jsx";

export const Hero = ({ onClickVisibleFormContact }) => {
  return (
    <HeroContainer>
      <Carousel onClickVisibleFormContact={onClickVisibleFormContact} />
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: clamp(460px, 68vh, 650px);
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1023px) {
    height: clamp(400px, 56vh, 520px);
  }
`;
