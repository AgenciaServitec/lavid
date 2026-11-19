import React from "react";
import styled from "styled-components";
import { LogoServitec, SvgLocation, SvgPhone } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { WrapperComponent } from "../ui";
import { contactData } from "../../firebase";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
  <Container id="footer">
    <WrapperComponent>
      <>
        <div className="item-logo-footer">
          <div className="item-logo">
            <img src={LogoServitec} alt="Logo publicidad google" />
          </div>
          <div className="item-text">
            <h2>La Vid - Vino sin alcohol</h2>
          </div>
        </div>
        <div className="items-socials">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/ZumosdeUvaLavid/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
        <div className="items-contacts">
          <div className="item-contact">
            <div className="icon">
              <SvgPhone width="80px" />
            </div>
            <div className="content">
              <a
                href={`tel:+51${contactData.numbers.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {contactData.numbers.phone}
              </a>
              <p> Lun-Dom 9am-6pm</p>
            </div>
          </div>
          <div className="item-contact">
            <div className="icon">
              <SvgLocation width="80px" />
            </div>
            <div className="content">
              <a
                href={contactData.directions.local1Link}
                target="_blank"
                rel="noreferrer"
              >
                Chorrillos, Perú
                <p style={{ fontSize: "16px" }}>
                  {contactData.directions.local1Name}
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div>
            © Copyright 2022 - La Vid / Diseñado con{" "}
            <FontAwesomeIcon icon={faHeart} color="red" /> por{" "}
            {contactData.poweredBy.name}
          </div>
        </div>
      </>
    </WrapperComponent>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 4rem 0 0 0;
  background: #151414;
  color: #fff;
  .item-logo-footer {
    margin: auto;
    .item-logo {
      display: flex;
      justify-content: center;
      img {
        display: none;
        width: 15rem;
        height: auto;
        margin: 0.3rem 0 1.2rem 0;
      }
    }
    .item-text {
      text-align: center;
      h2 {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 1rem;
        color: #fff;
      }
      div {
        width: 60%;
        margin: 0 auto;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }

  .items-socials {
    width: 100%;
    margin: 3rem auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      &:after {
        content: "";
        width: 80%;
        //max-width: 30rem;
        height: 1px;
        background: #fff;
        bottom: 0;
        text-align: center;
        position: absolute;
        margin-top: 2rem;
      }
      li {
        margin-bottom: 1.7rem;
        a {
          color: #fff;
          padding: 0 1rem;
          font-size: 2.5rem;
        }
        &:last-child {
          span {
            border-right: none;
          }
        }
      }
    }
  }
  .items-contacts {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr;
    }

    .item-contact {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 1rem;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr auto;
      }
      .icon {
        font-size: 3rem;
      }
      .content {
        text-align: center;
        line-height: 3rem;
        p {
          opacity: 0.4;
        }
        a {
          font-size: 1.5rem;
          color: #fff;
        }
        a:hover {
          color: ${({ theme }) => theme.colors.sextiary};
        }
      }
    }
  }
  .bottom-footer {
    width: 100%;
    padding: 1.5rem;
    background: #121111;
    div {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      a {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.sextiary};
      }
    }
  }
`;
