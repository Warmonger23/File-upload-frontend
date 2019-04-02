import React, { Component } from "react";
import "../style/find.css";
import getFile from "../actions/getFile";
import isValid from "../actions/isValid";
import SignOut from "../components/signout";

class ShowFile extends Component {
    state = { list: null, loggedIn: false };

    componentDidMount() {
        isValid().then(data => {
            getFile().then(result => {
                console.log("result from back", result);
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
                content = <h1>No files uploaded yet!</h1>
            }
        }
        return (
            <div>
                <table className="centreContentTable">
                    <tr>
                        <th>
                            <div>
                                {content}
                            </div>
                        </th>
                        <th>
                            <div>
                                <SignOut></SignOut>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ShowFile;