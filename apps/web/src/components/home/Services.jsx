import React from "react";
import styled from "styled-components";
import { ImgUnidad1, ImgUnidad3, ImgUnidad6 } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Button } from "../ui";

export const Services = ({
  onClickVisibleFormContact,
  onEventGaClickButton,
  oneChangeMessageCustom,
}) => {
  const arraysWine = [
    {
      title: "1 Unidad",
      subtitle: "Botella 750 ml · 0% Alcohol",
      badge: null,
      offerText: "Oferta",
      img: ImgUnidad1,
      oldPrice: "40.00",
      newPrice: "39.00",
    },
    {
      title: "3 Unidades",
      subtitle: "Pack x 3 · 750 ml c/u",
      badge: "Más elegido",
      offerText: "Oferta · Ahorras S/.10",
      img: ImgUnidad3,
      oldPrice: "120.00",
      newPrice: "110.00",
    },
    {
      title: "6 Unidades",
      subtitle: "Pack x 6 · 750 ml c/u",
      badge: "Mayor ahorro",
      offerText: "Oferta · Ahorras S/.30",
      img: ImgUnidad6,
      oldPrice: "240.00",
      newPrice: "210.00",
    },
  ];

  return (
    <Container id="services">
      <div className="content-items">
        <h2 className="title">Vino 100% natural sin alcohol</h2>
        <div className="content-img">
          {arraysWine.map((array, index) => (
            <ItemService
              key={index}
              title={array.title}
              subtitle={array.subtitle}
              badge={array.badge}
              offerText={array.offerText}
              img={array.img}
              oldPrice={array.oldPrice}
              newPrice={array.newPrice}
              onClickVisibleFormContact={onClickVisibleFormContact}
              onEventGaClickButton={onEventGaClickButton}
              oneChangeMessageCustom={oneChangeMessageCustom}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const ItemService = ({
  img,
  title,
  subtitle,
  badge,
  offerText,
  oldPrice,
  newPrice,
  onClickVisibleFormContact,
  onEventGaClickButton,
  oneChangeMessageCustom,
}) => {
  const message = `Necesito esta cantidad ${title}`;

  return (
    <div className="item-img">
      {badge && <span className="corner-tag">{badge}</span>}

      <div className="image-wrapper">
        <img src={img} alt={title} className="image-bg" />
      </div>

      <h2>{title}</h2>
      <p className="subtitle-tag">{subtitle}</p>

      <div className="text-item">
        <span>{offerText}</span>
      </div>

      <div className="price-item">
        <span>S/.{oldPrice}</span>
        <strong>S/.{newPrice}</strong>
      </div>

      <Button
        text="Contactar"
        type="tertiary"
        onClick={() => {
          onClickVisibleFormContact(true);
          onEventGaClickButton(
            "click-boton-empezar-ahora",
            "Click boton empezar ahora"
          );
          oneChangeMessageCustom(message);
        }}
      />
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 3rem;
  }

  .content-items {
    padding: 3rem 0;
    max-width: 1140px;
    margin: 0 auto;

    .title {
      color: #bf1f6a;
      font-weight: 700;
      margin: 0 0 2.5rem 0;
      font-size: 2.2rem;
      text-align: center;
      text-decoration: underline;
    }

    .content-img {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 2rem;
      align-items: stretch;

      .item-img {
        position: relative;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 2.25rem 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        transition: border-color 0.25s ease, transform 0.25s ease;

        &:hover {
          border-color: #bf1f6a;
          transform: translateY(-3px);
        }

        .corner-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(191, 31, 106, 0.08);
          color: #bf1f6a;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
        }

        .image-wrapper {
          width: 100%;
          height: 230px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;

          img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
          }
        }

        h2 {
          margin: 0.4rem 0 0.2rem;
          font-size: 1.35rem;
          font-weight: 700;
          color: #000;
        }

        .subtitle-tag {
          margin: 0 0 0.85rem;
          font-size: 0.82rem;
          color: #79838c;
          font-weight: 400;
        }

        .text-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.3em 1.25em;
          border: 1px solid #d7d8d9;
          border-radius: 999px;
          text-align: center;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #000;
        }

        .price-item {
          padding: 1rem 0 1.25rem;
          display: flex;
          align-items: baseline;
          gap: 0.75rem;

          span {
            text-decoration: line-through;
            color: #79838c;
            font-size: 1rem;
          }

          strong {
            font-size: 1.4rem;
            font-weight: 700;
            color: #000;
          }
        }
      }
    }

    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
