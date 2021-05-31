import React from "react";
import { IBottleComponentProps } from "./bottleComponent.Types";
import "./bottleComponent.css";

export const BottleComponent: React.FunctionComponent<IBottleComponentProps> = (
  props: IBottleComponentProps
): React.ReactElement => {
  const { bottleDetails } = props;
  return (
    <React.Fragment>
      {bottleDetails.articles.map((article) => {
        return (
          <div className="FP_BottleViewArticle">
            <img className="FP_BottleViewImage" src={article.image} />
          </div>
        );
      })}
    </React.Fragment>
  );
};
