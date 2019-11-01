import React from "react";
import Home from "./components/Home";
import Editor from "./components/Editor";
import { Switch, Route } from "react-router-dom";

const App = props => {
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route path="/editor" component={Editor} />
      </Switch>
    </div>
  );
};

export default App;
