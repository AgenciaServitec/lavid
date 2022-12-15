import ReactGA from "react-ga4";

export const useAnalyticsEventTracker = (category = "Web category") => {
  return (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
};
