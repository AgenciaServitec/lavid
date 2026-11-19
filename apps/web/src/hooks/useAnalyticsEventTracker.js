import ReactGA4Module from "react-ga4";

const ReactGA4 = ReactGA4Module.default || ReactGA4Module;

export const useAnalyticsEventTracker = (category = "Web category") => {
  return (action = "test action", label = "test label") => {
    ReactGA4.event({ category, action, label });
  };
};
