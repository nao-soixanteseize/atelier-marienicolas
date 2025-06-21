import ReactGA from 'react-ga4';

// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-G0SZ38KE8P';

export const initGA = () => {
  // Initialize Google Analytics
  ReactGA.initialize(GA_MEASUREMENT_ID);

  // Send initial page view
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  });
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
