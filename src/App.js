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
      checkedface: "",
      message: ""
    };

    this.getDate = this.getDate.bind(this);
    this.getFace = this.getFace.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.getMood = this.getMood.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this);
    this.localStorage = this.localStorage.bind(this);
  }

  getDate = event => {
    this.setState({
      date: event.target.value
    });
    this.localStorage();
  };

  getMood = event => {
    const { faces } = this.state;
    let thisFace = event.currentTarget.value;
    faces.push(thisFace);
    this.setState({ faces: faces });
    this.localStorage();
  };

  getFace = event => {
    this.setState({ checkedface: event.target.value });
  };

  getMessage = event => {
    this.setState({
      message: event.target.value
    });
    this.localStorage();
  };

  // LOCAL STORAGE

  saveData() {
    localStorage.setItem("moodData", JSON.stringify(this.state));
  }

  getData() {
    return JSON.parse(localStorage.getItem("moodData"));
  }

  localStorage() {
    this.saveData();
    this.getData();
  }

  // RENDERIZADO

  render() {
    const { faces, checkedface } = this.state;
    console.log(checkedface);
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
              return <Editor routerProps={routerProps} faces={faces} checkedface={checkedface} getMood={this.getMood} getFace={this.getFace} getMessage={this.getMessage} getDate={this.getDate} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
