import React from "react";
import styled from "styled-components";
import {
  Carousel,
  ContactSection,
  Services,
  WineCharacters,
} from "../../components";
import { FormContact, WrapperComponent } from "../../components/ui";
import { useAnalyticsEventTracker } from "../../hooks";

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
        <Carousel onClickVisibleFormContact={onClickVisibleFormContact} />
        <WrapperComponent>
          <Services
            onClickVisibleFormContact={onClickVisibleFormContact}
            onEventGaClickButton={onEventGaClickButton}
            oneChangeMessageCustom={oneChangeMessageCustom}
          />

          <WineCharacters />
        </WrapperComponent>
        <ContactSection />
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
  width: 100%;
  height: auto;
  background: #fff;
`;
