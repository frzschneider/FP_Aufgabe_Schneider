import React from "react";
import { BottleDetailCardComponent } from "../../components/bottleDetailCardComponent/bottleDetailCardComponent";
import { IBottle } from "../../models/IBottle";
import { IDetailViewProps } from "./detailView.Types";

export const DetailView: React.FunctionComponent<IDetailViewProps> = (props: IDetailViewProps): React.ReactElement => {
  const { bottleData } = props;
  return (
    <div className="FP_BottleDetailCardList">
      {bottleData.map((bottle: IBottle) => {
        return <BottleDetailCardComponent bottleDetails={bottle} />;
      })}
    </div>
  );
};
