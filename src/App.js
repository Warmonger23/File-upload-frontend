import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Reset from "./components/reset"
import UploadCsv from "./components/uploadCsv";
import Home from "./components/home";
import ShowImages from "./components/showImage";
import ShowFiles from "./components/showFile";
import Auth from "./components/auth";
import UploadImage from "./components/uploadImage"
import UploadVideo from "./components/uploadVideo";
import ShowVideo from "./components/showVideo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/uploadcsv" component={UploadCsv} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/showFiles" component={ShowFiles} />
          <Route exact path="/showImages" component={ShowImages} />
          <Route exact path="/uploadImage" component={UploadImage} />
          <Route exact path="/uploadVideo" component={UploadVideo} />
          <Route exact path="/showVideo" component={ShowVideo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
