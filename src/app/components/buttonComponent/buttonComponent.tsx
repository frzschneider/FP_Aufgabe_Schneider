import React from "react";
import { IButtonComponentProps } from "./buttonComponent.Types";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./buttonComponent.css";

export const ButtonComponent: React.FunctionComponent<IButtonComponentProps> = (
  props: IButtonComponentProps
): React.ReactElement => {
  return (
    <Link to={props.link} className="FP_Link">
      <div className="FP_Button">{props.displayText}</div>
    </Link>
  );
};
