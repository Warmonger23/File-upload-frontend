import React, { Component } from "react";


class Auth extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="auth">
                    <a href="signin">Sign In</a>
                </div>
                <div className="auth1">
                    <a href="signup">Sign Up</a>
                </div>
            </div>
        )
    }
}

export default Auth;