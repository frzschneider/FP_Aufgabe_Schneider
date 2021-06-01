import React from "react";
import { BottleComponent } from "../../components/bottleComponent/bottleComponent";
import { ButtonComponent } from "../../components/buttonComponent/buttonComponent";
import { IBottleViewProps } from "./bottleView.Types";
import "./bottleView.css";

/**
 * Return of the bottleView Page. Iterates through all bottles to create the BottleComponent.
 * @param props IBottleViewProps
 * @returns React.ReactElement
 */
export const BottleView: React.FunctionComponent<IBottleViewProps> = (props: IBottleViewProps): React.ReactElement => {
  const { bottleData } = props;
  return (
    <div className="FP_BottleViewList">
      {bottleData.map((bottle) => {
        return <BottleComponent bottleDetails={bottle} key={bottle.id} />;
      })}
    </div>
  );
};
