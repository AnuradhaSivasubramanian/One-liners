import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SubmitOneliner from "./containers/SubmitOneliner";
import ViewOneliner from "./containers/ViewOneliner";

function App() {
  return (
    <BrowserRouter>
      <div className="app--wrapper" data-test="component-app">
        <Switch>
          <Route exact path="/">
            <SubmitOneliner data-test="submitoneliner-component" />
          </Route>
          <Route path="/viewoneliner">
            <ViewOneliner data-test="viewoneliner-component" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
