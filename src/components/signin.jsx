import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import signIn from "../actions/signIn";

class SigIn extends Component {
  state = { userName: "", password: "", wrongData: false };

  signInHandler = e => {
    let userID = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
    let data = { userID: userID, password: password };
    this.setState({ wrongData: false });

    signIn(data).then(res => {
      console.log("From back", res.data.code);
      if (res.data.code !== "200") {
        this.setState({ wrongData: true });
      } else {
        this.props.history.push("/home");
      }
    }).catch(err => {
      console.log("inside catch of signin");
      // alert("Wrong user id or password");
    });
  };

  render() {
    let result, content;
    content = (
      <div id="signinContainer">
        <input
          className="input1"
          id="uname"
          type="text"
          placeholder="User Name"
        />
        <input
          className="input2"
          id="pwd"
          type="password"
          placeholder="Password"
        />
        <MDBBtn
          onClick={this.signInHandler}
          color="info"
          size="m"
          className="searchButton"
        >
          Sign In
        </MDBBtn>
      </div>
    );
    if (this.state.wrongData) {
      result = (
        <div id="signinContainer">
          {content}
          <div style={{ color: "red" }}>
            Wrong User ID or password, please try again
          </div>
          <div className="forgotPassword">
            <a href="/reset">Forgot password?</a>
          </div>
        </div>
      )
    } else {
      result = (
        <div>
          {content}
          <div className="forgotPassword">
            <a href="/reset">Forgot password?</a>
          </div>
        </div>
      )
    }
    return (
      <div className="centreContent">
        {result}
      </div>
    );
  }
}
export default SigIn;
