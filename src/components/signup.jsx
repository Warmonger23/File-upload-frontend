import React, { Component } from "react";
import signUp from "../actions/signUp"
import { MDBBtn } from "mdbreact"


class SignUp extends Component {
  state = { wrongData: null };

  signUpHandler = e => {
    let userID = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
    let data = { userID: userID, password: password };
    signUp(data).then(res => {
      console.log("From back", res);
      if (res.data.code === 404) {
        console.log("This is the wrong data", res.data.message);

        this.setState({ wrongData: res.data.message });
      } else {
        this.props.history.replace("/home");
      }
    });
  };

  render() {
    let result;
    if (this.state.wrongData) {
      result = (
        <div>
          <div>
            <div id="signupContainer">
              <input
                className="input"
                id="uname"
                type="text"
                placeholder="User Name"
              />
              <input
                className="input"
                id="pwd"
                type="password"
                placeholder="Password"
              />
              <MDBBtn
                onClick={this.signUpHandler}
                color="info"
                size="m"
                className="signUpButton"
              >
                Sign Up
            </MDBBtn>
            </div>
          </div>

          <div style={{ color: "red" }}>
            {this.state.wrongData}
          </div>
        </div>
      )
    } else {
      result = (
        <div>
          <div id="signupContainer">
            <input
              className="input"
              id="uname"
              type="text"
              placeholder="User Name"
            />
            <input
              className="input"
              id="pwd"
              type="password"
              placeholder="Password"
            />
            <MDBBtn
              onClick={this.signUpHandler}
              color="info"
              size="m"
              className="searchButton"
            >
              Sign Up
          </MDBBtn>
          </div>
        </div>
      )
    }
    return (
      <div>
        {result}
      </div>
    );
  }
}
export default SignUp;
