import React, { Component } from "react";
import "../style/find.css";
import { MDBBtn } from "mdbreact";
import isValid from "../actions/isValid";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar'

class UploadVideo extends Component {

    constructor() {
        super();
        this.state = {
            video: null,
            input: "Name file",
            searchedResult: null,
            showLoader: false,
            progressBar: 0
        };
        this.importVideo = this.importVideo.bind(this);
    }

    componentWillMount() {
        this.setState({ progressBar: 0 });
        isValid().then(data => {
            console.log("Inside uploadvideo.jsx ", data);
        }).catch(err => {
            alert("You haven't logged in, please log in first or sign up!");
            this.props.history.push("/");
        });
    }

    handleChange = event => {
        console.log(event.target.files);
        console.log("Size", event.target.files[0].size);
        this.setState({
            video: event.target.files
        });
    };

    importVideo = event => {
        console.log("Inside importVideo", event.target.value);

        const { video } = this.state;
        if (!video) {
            alert("Please select an video to upload");
            return;
        }
        const hundred_mb = 200000000;
        let totalSize = 0;
        for (let i = 0; i < video.length; i++) {
            let size = video[i].size;
            totalSize += size;
            if (size > hundred_mb) {
                console.log(video[i].name);
                alert("File " + video[i].name + " size is more than 100MB");
                return;
            }
        }
        console.log("Total size", totalSize);
        this.setState({ showLoader: true });
        const formData = new FormData();
        for (let i = 0; i < video.length; i++) {
            formData.append("video" + i, video[i]);
        }
        axios({
            method: "post",
            url: `http://localhost:3020/video`,
            data: formData,
            withCredentials: true,
            onUploadProgress: progressEvent => {
                console.log("This much done", progressEvent.loaded);
                console.log("progress", Math.round(((totalSize - progressEvent.loaded) / totalSize) * 100));
                this.setState({
                    progressBar: 100 - Math.round(((totalSize - progressEvent.loaded) / totalSize) * 100)
                });
            }
        }).then(res => {
            this.setState({
                video: null,
                search: "",
                input: "",
                showLoader: false,
            }, () => {
                alert("Upload successful");
                this.setState({ progressBar: 0 });
            });
            // alert("Upload successful");
            console.log("Data from the backend", res);
        }).catch(err => {
            alert("Error ");
        });
    };

    render() {
        let content;

        if (!this.state.showLoader) {
            content = (
                <div className="content">
                    <h4 className="enterText">Please upload a video.</h4>
                    <input
                        className="input"
                        type="file"
                        key={this.state.input || ""}
                        onChange={this.handleChange}
                        accept="video/*"
                        multiple
                    />
                    <br />
                    <br />
                    <MDBBtn onClick={this.importVideo} color="info">
                        Upload!
                    </MDBBtn>
                    {/* <div>{this.state.progressBar}</div> */}
                </div>
            );
        } else {
            content = (
                <div className="percentBar">
                    <ProgressBar now={this.state.progressBar}></ProgressBar>
                    <div>{this.state.progressBar + "%"}</div>
                </div>
            )
        }
        return <div>{content}</div>;
    }
}

export default UploadVideo;
