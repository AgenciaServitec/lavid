import React from "react";
import styled from "styled-components";
import { Carousel, Services, WineCharacters } from "../../components";
import { FormContact, WrapperComponent } from "../../components/ui";

export const Home = ({
  onClickVisibleFormContact,
  visibleFormContact,
  onEventGaClickButton,
  onEventGaClickVideos,
}) => {
  return (
    <>
      <Container>
        <Carousel
          onClickVisibleFormContact={onClickVisibleFormContact}
          onEventGaClickButton={onEventGaClickButton}
        />
        <WrapperComponent>
          {/*<ServiceSection*/}
          {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
          {/*  onEventGaClickButton={onEventGaClickButton}*/}
          {/*  onEventGaClickVideos={onEventGaClickVideos}*/}
          {/*/>*/}
          <Services
            onClickVisibleFormContact={onClickVisibleFormContact}
            onEventGaClickButton={onEventGaClickButton}
          />

          <WineCharacters />
        </WrapperComponent>
      </Container>
      <FormContact
        visibleFormContact={visibleFormContact}
        onClickVisibleFormContact={onClickVisibleFormContact}
        onEventGaClickButton={onEventGaClickButton}
      />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
