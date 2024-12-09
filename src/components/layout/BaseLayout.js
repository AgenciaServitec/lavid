import React, {useState} from "react";
import styled from "styled-components";
import {ImgLogoLavid2} from "../../images";
import {useDevice} from "../../hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Drawer} from "./Drawer";
import {Footer} from "./Footer";
import {ButtonsFloating, WrapperComponent} from "../ui";
import {useNavigate} from "react-router";
import {HeaderDesktop} from "./HeaderDesktop";

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
      <div className="header">
        <WrapperComponent>
          <>
            {isMobile ? (
              <div className="menu-mobile">
                <div className="item-logo">
                  <img
                    src={ImgLogoLavid2}
                    alt="La vid.life"
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
                <div
                  className="icon-bar"
                  onClick={() => setVisibleDrawer(true)}
                >
                  <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
              </div>
            ) : (
              <HeaderDesktop />
            )}
          </>
        </WrapperComponent>
      </div>
      <div className="body">{children}</div>
      <Footer />
      <ButtonsFloating />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: auto;
  height: auto;
  position: relative;

  .header {
    position: relative;
    width: 100%;
    max-width: 1536px;
    height: auto;
    background: #fff;
    margin: auto;
    padding: 1rem;
    display: grid;
    grid-area: auto;

    .menu-mobile {
      width: 100%;
      color: #000;
      display: grid;
      grid-template-columns: 85% 1fr;

      .item-logo {
        display: flex;
        align-items: center;
        justify-content: start;

        img {
          width: 65%;
          max-width: 85px;
        }
      }

      .icon-bar {
        width: auto;
        height: 100%;
        padding: 0.7rem 0.1rem 0.7rem 1.5rem;
      }
    }
  }

  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
