import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Favorites } from "../containers/";
import { Sidebar } from "../components/";

const SharedRoute = ({ children }) => (
  <div className="App">
    <div className="App-rightpanel">
      <Sidebar />
    </div>
    <div className="App-leftpanel">{children}</div>
  </div>
);

const AppRouter = () => (
  <Router>
    <Switch>
      <SharedRoute>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
      </SharedRoute>
    </Switch>
  </Router>
);

export default AppRouter;
