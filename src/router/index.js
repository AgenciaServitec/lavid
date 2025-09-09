import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import { Home, Page404, ContactSuccess, Contact } from "../pages";

export const Router = ({
  onClickVisibleFormContact,
  oneChangeMessageCustom,
  visibleFormContact,
  onEventGaClickButton,
  onEventGaClickVideos,
  onEventGaClickSuccessful,
  messageCustom,
}) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout onClickVisibleFormContact={onClickVisibleFormContact}>
            <Home
              onClickVisibleFormContact={onClickVisibleFormContact}
              oneChangeMessageCustom={oneChangeMessageCustom}
              messageCustom={messageCustom}
              visibleFormContact={visibleFormContact}
              onEventGaClickButton={onEventGaClickButton}
              onEventGaClickVideos={onEventGaClickVideos}
            />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/contact-success"
        element={
          <BaseLayout>
            <ContactSuccess
              onEventGaClickButton={onEventGaClickButton}
              onEventGaClickSuccessful={onEventGaClickSuccessful}
            />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/contact"
        element={
          <BaseLayout>
            <Contact />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
