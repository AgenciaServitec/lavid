import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { rgba } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ImgLogoLavid2 } from "../../images";
import { useDevice } from "../../hooks";
import { Drawer } from "./Drawer.jsx";
import { Footer } from "./Footer.jsx";
import { ButtonsFloating, WrapperComponent } from "../ui";
import { HeaderDesktop } from "./HeaderDesktop.jsx";

export const BaseLayout = ({ children, onClickVisibleFormContact }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        onClickVisibleFormContact={onClickVisibleFormContact}
      />

      <header className="header">
        <WrapperComponent>
          {isMobile ? (
            <div className="menu-mobile">
              <div className="item-logo">
                <img
                  src={ImgLogoLavid2}
                  alt="La vid.life"
                  onClick={() => navigate("/")}
                />
              </div>

              <button
                type="button"
                className="icon-bar"
                onClick={() => setVisibleDrawer(true)}
                aria-label="Abrir menú de navegación"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          ) : (
            <HeaderDesktop />
          )}
        </WrapperComponent>
      </header>

      <main className="body">{children}</main>
      <Footer />
      <ButtonsFloating />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1536px;
    margin: 0 auto;
    position: relative;

    .header {
      position: relative;
      width: 100%;
      max-width: 1536px;
      background-color: ${theme.colors.secondary};
      margin: 0 auto;
      padding: 0.45rem 1rem;
      box-sizing: border-box;

      .menu-mobile {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .item-logo {
          display: flex;
          align-items: center;

          img {
            width: 3.3rem;
            height: auto;
            display: block;
            cursor: pointer;
          }
        }

        .icon-bar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          padding: 0;
          border: none;
          border-radius: 10px;
          background: transparent;
          color: ${theme.colors.primary};
          font-size: 1.45rem;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;

          &:hover,
          &:active {
            background-color: ${rgba(theme.colors.sextiary, 0.08)};
            color: ${theme.colors.sextiary};
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${rgba(theme.colors.sextiary, 0.25)};
          }
        }
      }
    }
  `}
`;
