import React from "react";
import Home from "./components/Home";
import Editor from "./components/Editor";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faces: [],
      date: "",
      message: ""
    };

    this.getDate = this.getDate.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.getMood = this.getMood.bind(this);
    // this.paintFaces = this.paintFaces.bind(this);
  }

  getDate = event => {
    this.setState({
      date: event.target.value
    });
  };

  getMood = event => {
    const { faces } = this.state;
    let thisFace = event.currentTarget.value;
    faces.push(thisFace);
    this.setState({ faces: faces });
  };

  getMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  // paintFaces = event => {
  //   if (this.state.faces === "happy") {
  //     return;
  //   } else if (this.state.faces === "sad") {
  //   }
  // };

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
          <Route
            path="/editor"
            render={routerProps => {
              return <Editor routerProps={routerProps} faces={faces} getMood={this.getMood} getMessage={this.getMessage} getDate={this.getDate} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
