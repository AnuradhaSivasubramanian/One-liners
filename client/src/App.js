import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ViewOneliner from "./containers/ViewOneliner";
import SubmitOneliner from "./containers/SubmitOneliner";

function App() {
  return (
    <BrowserRouter>
      <div className="app--wrapper" data-test="component-app">
        <Switch>
          <Route exact path="/" component={SubmitOneliner} />
          <Route path="/viewoneliner" component={ViewOneliner} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
