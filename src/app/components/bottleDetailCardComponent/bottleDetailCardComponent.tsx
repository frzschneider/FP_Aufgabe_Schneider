import React from "react";
import { IBottleDetailCardComponentProps } from "./bottleDetailCardComponent.Types";
import "./bottleDetailCardComponent.css";

export const BottleDetailCardComponent: React.FunctionComponent<IBottleDetailCardComponentProps> = (
  props: IBottleDetailCardComponentProps
): React.ReactElement => {
  const { bottleDetails } = props;
  return (
    <div className="FP_BottleDetailCard">
      {bottleDetails.articles.map((article) => {
        return (
          <div className="FP_ArticleCard">
            <div className="FP_ArticleCardImageContainer">
              <img className="FP_ArticleCardImage" src={article.image} />
            </div>
            <div className="FP_ArticleCardTextContainer">
              <p className="FP_ArticleCardName">{bottleDetails.name}</p>
              <p className="FP_ArticleCardPrice">{article.price} €</p>
              <p className="FP_ArticleShortDescription">{article.shortDescription} </p>
              <p className="FP_ArticleCardPricePerUnit">{article.pricePerUnitText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
