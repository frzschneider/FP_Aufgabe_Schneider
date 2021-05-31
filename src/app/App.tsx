import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { DetailView } from "./pages/detailView/detailView";
import { BottleView } from "./pages/bottleView/bottleView";
import { IBottle } from "./models/IBottle";
import bottleMockData from "./mockData/bottleData.json";
import { ButtonComponent } from "./components/buttonComponent/buttonComponent";

export const App: React.FunctionComponent = (): React.ReactElement => {
  const [bottleData, setBottleData] = React.useState<IBottle[]>(bottleMockData);
  return (
    <Router>
      <Redirect from="/" to="/detailView" />
      <Switch>
        <Route path="/detailView">
          <div className="FP_Header">
            <ButtonComponent link="/bottleView" displayText="View BottleView" />
          </div>
          <DetailView bottleData={bottleData} />
        </Route>
        <Route path="/bottleView">
          <div className="FP_Header">
            <ButtonComponent link="/detailView" displayText="View DetailView" />
          </div>
          <div className="FP_Header"></div>
          <BottleView bottleData={bottleData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
