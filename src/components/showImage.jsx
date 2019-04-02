import React, { Component } from "react";
import "../style/find.css";
import getImage from "../actions/getImage";
import isValid from "../actions/isValid";

class ShowImage extends Component {
    state = { list: null, loggedIn: false };

    componentDidMount() {
        console.log("In component mount");
        isValid().then(data => {
            getImage().then(result => {
                console.log("result from back", result.data);
                let ct = 0;
                this.setState({
                    list: result.data.map((l) => {
                        console.log("L1", l.key);
                        console.log("L2", l.value);
                        ct++;
                        return <li key={ct}><a href={l.key} rel="noopener noreferrer" target="_blank">{l.value}</a></li>
                    }), loggedIn: true
                });
                console.log("This", this.state.list);
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
        if (this.state.loggedIn) {
            if (this.state.list && this.state.list.length > 0) {
                content = <ul>{this.state.list}</ul>
            } else {
                content = <h1>No files images uploaded yet!</h1>
            }
        }
        return <div className="centreContent">{content}</div>;
    }
}

export default ShowImage