import React from "react";
import { IBottleComponentProps } from "./bottleComponent.Types";
import "./bottleComponent.css";

/**
 * Return of every single BottleComponent. Iterates through the articles of all bottles and creates the HTML elements.
 * @param props as IBottleComponentProps
 * @returns React.ReactElement
 */
export const BottleComponent: React.FunctionComponent<IBottleComponentProps> = (
  props: IBottleComponentProps
): React.ReactElement => {
  const { bottleDetails } = props;
  return (
    <React.Fragment>
      {bottleDetails.articles.map((article) => {
        return (
          <div className="FP_BottleViewArticle" key={article.id}>
            <img className="FP_BottleViewImage" src={article.image} />
          </div>
        );
      })}
    </React.Fragment>
  );
};
