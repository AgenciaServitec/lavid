import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { contactData } from "../../firebase";
import { SvgEmail, SvgLocation, SvgPhone } from "../../images";
import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

const ItemContact = ({
  svg = <SvgPhone width="80px" />,
  title = "title",
  subtitle = "subtitle",
  href = "#",
}) => {
  return (
    <article className="item-contact">
      <div className="icon">{svg}</div>
      <div className="content">
        <a href={href} target="_blank" rel="noreferrer">
          {title}
          <p style={{ fontSize: "16px" }}>{subtitle} </p>
        </a>
      </div>
    </article>
  );
};

export const ContactSection = ({}) => {
  return (
    <Container>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <div id="contact" className="contact-icons">
            <h2 className="title-contacts">Contáctanos</h2>
            <section className="items-contacts">
              <ItemContact
                title={contactData.numbers.phone}
                subtitle="Lun-Dom 9am-6pm"
                href={`tel:+51${contactData.numbers.phone}`}
              />
              <ItemContact
                svg={<SvgEmail width="80px" />}
                title={contactData.emails.sales}
                subtitle="Soporte en Linea"
                href={`mailto:${contactData.emails.sales}`}
              />
              <ItemContact
                svg={<SvgLocation width="80px" />}
                title="Chorrillos, Perú"
                subtitle={contactData.directions.local1Name}
                href={contactData.directions.local1Link}
              />
            </section>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div className="contact-map">
            <iframe
              title="map vida sana"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7800.270941810622!2d-77.0185048349182!3d-12.171178899999989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b783084c9897%3A0x1af86a78a89c069e!2sCa.%20Coronel%20Bermudez%20113%2C%20Lima%2015064!5e0!3m2!1ses!2spe!4v1703090666952!5m2!1ses!2spe"
              width="auto"
              height="450"
              allowFullScreen=""
              loading="lazy"
              frameBorder={0}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1280px;
  margin: auto;
  padding: 3rem 2em;
  .contact-icons {
    padding-left: 1rem;
    .title-contacts {
      justify-items: center;
      text-align: center;
      font-size: 3rem;
    }

    .items-contacts {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;

      ${mediaQuery.minTablet} {
        padding-right: 1.5rem;
        padding-top: 2rem;
        grid-template-columns: 1fr;
      }

      .item-contact {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;

        ${mediaQuery.minTablet} {
          grid-template-columns: 1fr auto;
          gap: 2em;
        }

        .icon {
          font-size: 3rem;
        }

        .content {
          text-align: center;
          line-height: 2rem;

          p {
            opacity: 1;
            font-weight: 300;
          }

          a {
            font-size: 1.2rem;
            color: #0e0d0d;
            font-weight: 700;
          }

          a:hover {
            color: ${({ theme }) => theme.colors.sextiary};
          }
        }
      }
    }
  }

  .contact-map {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    iframe {
      width: 100%;
      height: 400px;
    }
  }
`;
