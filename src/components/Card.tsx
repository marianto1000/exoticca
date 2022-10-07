import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Card.css";
import { CardContainer, RowCards, Image, DestinationInfo, PriceInfo, CardBottomInfo, CardBottomTitle } from "./Styled";
interface CardInterface {
  title: string;
}

export default function Card(props: any) {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const cards = props.cardInfo.cards;

  return (
    <div>
      <Slider {...settings}>
        {cards.map((card: any, index:number) => (
          <>
            <RowCards key={index}>
              <CardContainer className="cardContainer">
                <PriceInfo>
                <span>{`-${card.priceDetail.pricingPercentage}%`}</span>
                </PriceInfo>
                <DestinationInfo>
                  <span>{card.destination}</span>
                  <span>{`${card.days} dias`}</span>
                </DestinationInfo>
                <Image
                  alt={`${card.title} image title`}
                  src={card.images[0].desktop}
                />
                <CardBottomTitle>{card.title}</CardBottomTitle>
                <CardBottomInfo>
                  <h5>{`Desde${card.priceDetail.oldPriceBeautify}`}</h5>
                  <h3>{card.priceDetail.fromPriceBeautify}</h3>
                </CardBottomInfo>
              </CardContainer>
            </RowCards>
          </>
        ))}
      </Slider>
    </div>
  );
}
