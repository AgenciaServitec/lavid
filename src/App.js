import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { yup } from "./config";
import { GlobalStyles } from "./styles/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { setLocale } from "yup";
import { currentConfig } from "./firebase";
import ReactGA4 from "react-ga4";
import { useAnalyticsEventTracker } from "./hooks";

export const App = () => {
  const gaEventTrackerButtons = useAnalyticsEventTracker("Buttons");
  const gaEventTrackerVideos = useAnalyticsEventTracker("Videos");
  const gaEventTrackerSuccessful = useAnalyticsEventTracker("Successful");

  const firebaseApp = currentConfig.firebaseApp;

  const [visibleFormContact, setVisibleFormContact] = useState(false);
  const [messageCustom, setMessageCustom] = useState("");

  useEffect(() => {
    ReactGA4.initialize(firebaseApp.measurementId);
    ReactGA4.send(window.location.pathname + window.location.search);
    setLocale(yup["es"]);
  }, [firebaseApp.measurementId]);

  const onClickVisibleFormContact = (visible = !visibleFormContact) =>
    setVisibleFormContact(visible);

  const eventGaClickButton = (action, label) =>
    gaEventTrackerButtons(action, label);

  const eventGaClickVideos = (action, label) =>
    gaEventTrackerVideos(action, label);

  const eventGaClickSuccessful = (action, label) =>
    gaEventTrackerSuccessful(action, label);

  const oneChangeMessageCustom = (message) => setMessageCustom(message);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router
          onClickVisibleFormContact={onClickVisibleFormContact}
          oneChangeMessageCustom={oneChangeMessageCustom}
          messageCustom={messageCustom}
          visibleFormContact={visibleFormContact}
          onEventGaClickButton={eventGaClickButton}
          onEventGaClickVideos={eventGaClickVideos}
          onEventGaClickSuccessful={eventGaClickSuccessful}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};
