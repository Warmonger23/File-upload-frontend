import React, { Component } from "react";
import "../style/find.css";
import getVideo from "../actions/getVideo";
import isValid from "../actions/isValid";

class ShowFile extends Component {
    state = { list: null, loggedIn: false };

    componentWillMount() {
        isValid().then(data => {
            getVideo().then(result => {
                console.log("result from back asdfsaf", result);
                let ct = 0;
                this.setState({
                    list: result.data.map((l) => {
                        console.log("L1", l.key);
                        console.log("L2", l.value);
                        ct++;
                        return <li key={ct}><a href={l.key} rel="noopener noreferrer" target="_blank">{l.value}</a></li>
                    }),
                    loggedIn: true
                });
            }).catch(err => {
                this.setState({ loggedIn: false });
            });
        }).catch(err => {
            alert("You haven't logged in, please log in first or sign up!");
            this.props.history.push("/");
        });
    }
    render() {
        let content = null;
        console.log("Is logged in", this.state.loggedIn);
        if (this.state.loggedIn) {
            if (this.state.list && this.state.list.length > 0) {
                content = <ul>{this.state.list}</ul>
            } else {
                content = <h1>No videos uploaded yet!</h1>
            }
        }
        return <div className="centreContent">{content}</div>;
    }
}

export default ShowFile