import { Col, Row } from "antd";
import styled, { css } from "styled-components";
import { contactData } from "../../firebase";
import { SvgEmail, SvgLocation, SvgPhone } from "../../images";
import { mediaQuery } from "../../styles/constants/index.js";

const ItemContact = ({
  svg = <SvgPhone />,
  title = "title",
  subtitle = "subtitle",
  href = "#",
}) => {
  return (
    <article className="item-contact">
      <div className="icon">{svg}</div>
      <div className="content">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span className="item-title">{title}</span>
          <p className="item-subtitle">{subtitle}</p>
        </a>
      </div>
    </article>
  );
};

export const ContactSection = () => {
  return (
    <Container id="contact">
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={11} lg={10}>
          <div className="contact-icons">
            <h2 className="title-contacts">Contáctanos</h2>

            <section className="items-contacts">
              <ItemContact
                svg={<SvgPhone />}
                title={contactData.numbers.phone}
                subtitle="Lun-Dom 9am-6pm"
                href={`tel:+51${contactData.numbers.phone}`}
              />
              <ItemContact
                svg={<SvgEmail />}
                title={contactData.emails.sales}
                subtitle="Soporte en Línea"
                href={`mailto:${contactData.emails.sales}`}
              />
              <ItemContact
                svg={<SvgLocation />}
                title="Chorrillos, Perú"
                subtitle={contactData.directions.local1Name}
                href={contactData.directions.local1Link}
              />
            </section>
          </div>
        </Col>

        <Col xs={24} md={13} lg={14}>
          <div className="contact-map">
            <iframe
              title="map vida sana"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3531.624254824383!2d-77.0246593!3d-12.1683406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b79b77b17dad%3A0xa63366df12e89f05!2sAv.%20Defensores%20del%20Morro%20479%2C%20Chorrillos%2015064!5e1!3m2!1ses-419!2spe!4v1795110159676!5m2!1ses-419!2spe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 3rem 1.5rem;

    ${mediaQuery.minTablet} {
      padding: 3.5rem 2.5rem;
    }

    .contact-icons {
      display: flex;
      flex-direction: column;
      align-items: center;

      ${mediaQuery.minTablet} {
        align-items: flex-start;
        padding-right: 1rem;
      }

      .title-contacts {
        margin: 0 0 2rem;
        text-align: center;
        color: ${theme.colors.primary};
        font-size: 2.25rem;
        font-weight: ${theme.font_weight.large};
        line-height: 1.2;

        ${mediaQuery.minTablet} {
          text-align: left;
          font-size: 2.65rem;
        }
      }

      .items-contacts {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.75rem;

        .item-contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;

          ${mediaQuery.minTablet} {
            display: grid;
            grid-template-columns: 3.5rem 1fr;
            align-items: center;
            gap: 1.25rem;
          }

          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 3.5rem;
            flex-shrink: 0;

            svg {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          .content {
            text-align: center;

            ${mediaQuery.minTablet} {
              text-align: left;
            }

            a {
              display: inline-flex;
              flex-direction: column;
              gap: 0.2rem;
              text-decoration: none;
              color: ${theme.colors.primary};
              transition: color 0.2s ease;

              &:hover {
                color: ${theme.colors.sextiary};
              }
            }

            .item-title {
              font-size: 1.15rem;
              font-weight: ${theme.font_weight.large};
              line-height: 1.3;
            }

            .item-subtitle {
              margin: 0;
              color: ${theme.colors.quaternary};
              font-size: 0.95rem;
              font-weight: ${theme.font_weight.small};
              line-height: 1.45;
            }
          }
        }
      }
    }

    .contact-map {
      width: 100%;
      height: 100%;

      iframe {
        display: block;
        width: 100%;
        height: 360px;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 6px 20px rgba(15, 25, 32, 0.08);

        ${mediaQuery.minTablet} {
          height: 430px;
        }
      }
    }
  `}
`;
