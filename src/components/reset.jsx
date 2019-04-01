import React, { Component } from "react";
import reset from "../actions/reset"
import { MDBBtn } from "mdbreact"
// import "../style/reset";

class Reset extends Component {
    state = { message: null, success: null };

    resetHandler = (e) => {
        this.setState({ message: null, success: null });
        let userID = document.getElementById("uname").value;
        let password = document.getElementById("pwd").value;
        reset({ userID: userID, password: password }).then(result => {
            if (result.data.code === 404) {
                this.setState({ message: result.data.message, success: false });
            } else {
                this.setState({ message: result.data.message, success: true });

            }
        });
    }

    gotoSignIn = (e) => {
        this.props.history.push("/signin");
    }

    render() {
        let content = (
            <div>
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
                    onClick={this.resetHandler}
                    color="info"
                    size="m"
                    className="resetButton"
                >
                    Reset
                </MDBBtn>
            </div>
        )
        let result;
        if (this.state.success != null) {
            if (this.state.success) {
                result = (
                    <div>{content}
                        <div style={{ color: "green", padding: 5 }}>
                            {this.state.message}
                        </div>
                    </div>
                )
            } else {
                result = (
                    <div>{content}
                        <div style={{ color: "red" }}>
                            {this.state.message}
                        </div>
                    </div>
                )
            }
        } else result = content;
        return (
            <div className="resetContainer">
                {result}
                <br />
                <MDBBtn
                    onClick={this.gotoSignIn}
                    color="info"
                    size="m"
                >
                    Go to Sign In
                </MDBBtn>
            </div>
        )
    }
}
export default Reset;
