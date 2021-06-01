import React from "react";
import { BottleDetailCardComponent } from "../../components/bottleDetailCardComponent/bottleDetailCardComponent";
import { IBottle } from "../../models/IBottle";
import { IDetailViewProps } from "./detailView.Types";

/**
 * Return of detailView. Iterates though all bottles to create the BottleDetailCardComponent for every bottle.
 * @param props IDetailViewProps
 * @returns React.ReactElement
 */
export const DetailView: React.FunctionComponent<IDetailViewProps> = (props: IDetailViewProps): React.ReactElement => {
  const { bottleData } = props;
  return (
    <div className="FP_BottleDetailCardList">
      {bottleData.map((bottle: IBottle) => {
        return <BottleDetailCardComponent bottleDetails={bottle} key={bottle.id} />;
      })}
    </div>
  );
};
