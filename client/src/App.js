import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SubmitOneliner from "./containers/SubmitOneliner";
import ViewOneliner from "./containers/ViewOneliner";

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
