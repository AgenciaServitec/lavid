import React from "react";
import styled from "styled-components";
import { Carousel, Services, WineCharacters } from "../../components";
import { FormContact, WrapperComponent } from "../../components/ui";
import { useAnalyticsEventTracker } from "../../hooks";

export const Home = ({
  onClickVisibleFormContact,
  visibleFormContact,
  onEventGaClickButton,
}) => {
  const gaEventTrackerIcons = useAnalyticsEventTracker("Icons");

  const eventGaClickIcon = (action, label) =>
    gaEventTrackerIcons(action, label);

  return (
    <>
      <Container>
        <Carousel onClickVisibleFormContact={onClickVisibleFormContact} />
        <WrapperComponent>
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
        onEventGaClickIcon={eventGaClickIcon}
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
