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
      img: ImgUnidad1,
      oldPrice: "40.00",
      newPrice: "39.00",
    },
    {
      title: "3 Unidades",
      img: ImgUnidad3,
      oldPrice: "120.00",
      newPrice: "110.00",
    },
    {
      title: "6 Unidades",
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
  oldPrice,
  newPrice,
  onClickVisibleFormContact,
  onEventGaClickButton,
  oneChangeMessageCustom,
}) => {
  const message = `Necesito esta cantidad ${title}`;

  return (
    <div className="item-img">
      <img src={img} alt={title} className="image-bg" />
      <h2>{title}</h2>

      <div className="text-item">
        <span>Oferta</span>
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
    padding: 1rem 5rem;
  }

  .content-items {
    padding: 3rem 0;
    .title {
      color: #bf1f6a;
      font-weight: 700;
      margin: 2rem 0;
      font-size: 2.2rem;
      text-align: center;
      text-decoration: underline;
    }
    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 1.5rem;
      flex-wrap: wrap;

      .item-img {
        padding: 1em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          max-width: 20em;
        }
        .text-item {
          width: 100%;
          border: 1px solid #000;
          text-align: center;
          padding: 0.3em 0;
        }
        .price-item {
          padding: 1em 0;
          display: flex;
          align-items: center;
          gap: 1em;

          span {
            text-decoration: line-through;
          }
          strong {
            font-size: 1.2em;
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
