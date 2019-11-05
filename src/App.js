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
      checkedface: ":)",
      message: ""
    };

    this.getDate = this.getDate.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.getMood = this.getMood.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this);
    this.cancelMood = this.cancelMood.bind(this);
    this.paintSavedFaces = this.paintSavedFaces.bind(this);
    this.cancelSendingMood = this.cancelSendingMood.bind(this);
    this.localStorage = this.localStorage.bind(this);
  }

  componentDidMount() {
    this.paintSavedFaces();
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
    this.setState({ faces: faces, checkedface: thisFace });
    this.localStorage();
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

  cancelMood() {
    const { faces } = this.state;
    this.setState({
      faces: faces.splice(0, faces.length - 1)
    });
  }

  paintSavedFaces() {
    if (localStorage.getItem("moodData")) {
      const savedFaces = this.getData("moodData").faces;
      this.setState({
        faces: savedFaces
      });
    }
  }

  cancelSendingMood() {
    const { date } = this.state;
    if (date === "") {
      alert("Date cannot be empty");
      this.cancelMood();
    }
  }

  render() {
    const { faces, checkedface } = this.state;

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
              return <Editor routerProps={routerProps} faces={faces} getMood={this.getMood} getMessage={this.getMessage} getDate={this.getDate} checkedface={checkedface} cancelMood={this.cancelMood} cancelSendingMood={this.cancelSendingMood} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
