import React from "react";
import { BottleComponent } from "../../components/bottleComponent/bottleComponent";
import { ButtonComponent } from "../../components/buttonComponent/buttonComponent";
import { IBottleViewProps } from "./bottleView.Types";
import "./bottleView.css";

export const BottleView: React.FunctionComponent<IBottleViewProps> = (props: IBottleViewProps): React.ReactElement => {
  const { bottleData } = props;
  return (
    <div className="FP_BottleViewList">
      {bottleData.map((bottle) => {
        return <BottleComponent bottleDetails={bottle} />;
      })}
    </div>
  );
};
