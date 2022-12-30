import React from "react";
import styled from "styled-components";
import {SvgEmail, SvgLocation, SvgPhone} from "../../images";
import {mediaQuery} from "../../styles/constants/mediaQuery";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

export const Contact = (onEventGaClickLink) => {
  return (
    <Container>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={24} md={12}>
          <div className="contact-icons">
            <h2 className="title-contacts">Contactanos</h2>
            <div className="items-contacts">
              <div className="item-contact">
                <div className="icon">
                  <SvgPhone width="80px" />
                </div>
                <div
                    className="content"
                    onClick={() =>
                        onEventGaClickLink(
                            "click-link-telefono-941801827",
                            "Click link telefono 941801827"
                        )
                    }
                >
                  <a href="tel:+51941801827" target="_blank" rel="noreferrer">
                    970 057 238
                  </a>
                  <p> Lun-Dom 9am-6pm</p>
                </div>
              </div>

              <div className="item-contact">
                <div className="icon">
                  <SvgEmail width="80px" />
                </div>
                <div
                    className="content"
                    onClick={() =>
                        onEventGaClickLink(
                            "click-link-email-contactos@servitec-peru.com",
                            "Click link email contactos@servitec-peru.com"
                        )
                    }
                >
                  <a
                      href="mailto:contactos@servitec-peru.com"
                      target="_blank"
                      rel="noreferrer"
                  >
                    contactos@servitec-peru.com
                  </a>
                  <p>Soporte en Linea</p>
                </div>
              </div>

              <div className="item-contact">
                <div className="icon">
                  <SvgLocation width="80px" />
                </div>
                <div
                    className="content"
                    onClick={() =>
                        onEventGaClickLink(
                            "click-link-ubicacion-EiSoB4t5tQ3rG5YU6",
                            "Click link ubicacion https://goo.gl/maps/EiSoB4t5tQ3rG5YU6"
                        )
                    }
                >
                  <a
                      href="https://goo.gl/maps/EiSoB4t5tQ3rG5YU6"
                      target="_blank"
                      rel="noreferrer"
                  >
                    Chorrillos, Perú
                  </a>
                  <p>Av.Defensores del Morro Nº479 Chorrillos Lima</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div className="contact-map">
            <iframe
                title="map vida sana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.177213609453!2d-77.02684798496466!3d-12.168335347487432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b79b77b7175f%3A0xa6b195dde66ca32b!2sAv.%20Defensores%20del%20Morro%20479%2C%20Chorrillos%2015064!5e0!3m2!1ses-419!2spe!4v1671745777155!5m2!1ses-419!2spe"
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
  min-height: 100%;
  height: auto;
  padding: 3rem 1em;
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
        }

        .icon {
          font-size: 3rem;
        }

        .content {
          text-align: center;
          line-height: 3rem;

          p {
            opacity: 1;
          }

          a {
            font-size: 1.5rem;
            color: #0e0d0d;
          }

          a:hover {
            color: ${({ theme }) => theme.colors.sextiary};
          }
        }
      }
    }
  }
  
  .contact-map{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    iframe{
      width: 100%;
      height: 400px;
    }
  }
`;
