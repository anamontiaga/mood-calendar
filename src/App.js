import React from "react";
import Home from "./components/Home";
import Editor from "./components/Editor";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faces: []
    };

    this.getMood = this.getMood.bind(this);
  }

  getMood = event => {
    let thisFace = event.currentTarget.value;
    console.log(thisFace);
    const { faces } = this.state;
    if (thisFace === ":)") {
      faces.push(thisFace);
    }
    this.setState({ faces: faces });
  };

  render() {
    const { faces } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home faces={faces} />;
            }}
          />
          <Route path="/editor" component={Editor} faces={faces} getMood={this.getMood} />
        </Switch>
      </div>
    );
  }
}

export default App;
