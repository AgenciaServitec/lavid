import React from "react";
import styled from "styled-components";
import { ImgUnidad1, ImgUnidad3, ImgUnidad6 } from "../../images";
import { Button } from "../ui";

const WHATSAPP_PHONE = "51932508739";

export const Services = ({ onEventGaClickButton }) => {
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
              onEventGaClickButton={onEventGaClickButton}
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
  onEventGaClickButton,
}) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    `Hola, estoy interesado en su vino sin alcohol. Quisiera pedir: ${title} (S/.${newPrice})`
  )}`;

  const handleContactClick = () => {
    if (onEventGaClickButton) {
      onEventGaClickButton(
        "click-boton-empezar-ahora",
        `Click boton contactar - ${title}`
      );
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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

      <Button text="Contactar" type="tertiary" onClick={handleContactClick} />
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem;

  .content-items {
    .title {
      color: #bf1f6a;
      font-weight: 700;
      margin: 0 0 clamp(1.75rem, 3vw, 2.5rem) 0;
      font-size: clamp(1.6rem, 3.2vw, 2.3rem);
      line-height: 1.25;
      text-align: center;
      text-decoration: underline;
    }

    .content-img {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: clamp(1.25rem, 2.5vw, 2rem);
      align-items: stretch;

      .item-img {
        position: relative;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: clamp(1.75rem, 3vw, 2.25rem) clamp(1.15rem, 2vw, 1.5rem)
          clamp(1.5rem, 2.5vw, 2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        transition:
          border-color 0.25s ease,
          transform 0.25s ease;

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
          font-size: clamp(0.72rem, 1vw, 0.78rem);
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1.2;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
        }

        .image-wrapper {
          width: 100%;
          height: clamp(190px, 24vw, 230px);
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
          margin: 0.4rem 0 0.25rem;
          font-size: clamp(1.2rem, 1.8vw, 1.4rem);
          line-height: 1.25;
          font-weight: 700;
          color: #000;
        }

        .subtitle-tag {
          margin: 0 0 0.85rem;
          font-size: clamp(0.8rem, 1.1vw, 0.88rem);
          line-height: 1.4;
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
          font-size: clamp(0.78rem, 1.05vw, 0.86rem);
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #000;
        }

        .price-item {
          padding: 1rem 0 1.25rem;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.75rem;

          span {
            text-decoration: line-through;
            color: #79838c;
            font-size: clamp(0.92rem, 1.3vw, 1.05rem);
            line-height: 1.2;
          }

          strong {
            font-size: clamp(1.3rem, 2vw, 1.5rem);
            line-height: 1.2;
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
