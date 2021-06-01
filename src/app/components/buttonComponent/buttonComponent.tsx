import React from "react";
import { IButtonComponentProps } from "./buttonComponent.Types";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./buttonComponent.css";

/**
 * Return of the switch button. Page link and displayed text are created via props.
 * @param props IButtonComponentProps
 * @returns React.ReactElement
 */
export const ButtonComponent: React.FunctionComponent<IButtonComponentProps> = (
  props: IButtonComponentProps
): React.ReactElement => {
  return (
    <Link to={props.link} className="FP_Link">
      <div className="FP_Button">{props.displayText}</div>
    </Link>
  );
};
