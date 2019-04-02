import React, { Component } from "react";
import "../style/find.css";
import { MDBBtn } from "mdbreact";
import isValid from "../actions/isValid";
import axios from "axios";
import SignOut from "../components/signout";
import SearchContent from "../components/searchContent";


class Home extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    console.log("Component mounts");

    isValid().then(data => {
      console.log("inside then of home");
      this.setState({ loggedIn: true });
    }).catch(err => {
      console.log("inside error");
      this.setState({ loggedIn: false });
      alert("You haven't logged in, please log in first or sign up!");
      this.props.history.push("/");
    });
  }

  uploadCsv = () => {
    this.props.history.push("/uploadcsv");
  }

  showUploadedFiles = () => {
    this.props.history.push("/showFiles");
  }

  uploadImage = () => {
    this.props.history.push("/uploadImage");
  }

  showUploadedImages = () => {
    this.props.history.push("/showImages");
  }

  uploadVideo = () => {
    this.props.history.push("/uploadVideo");
  }

  showUploadedVideos = () => {
    this.props.history.push("/showVideo");
  }

  signOut = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: `http://localhost:3020/signout`,
        withCredentials: true
      }).then(res => {
        this.props.history.push("/");
      }).catch(err => {
        console.log("Error in signout", err);
      });
    });
  }

  render() {
    let content = null;
    if (this.state.loggedIn) {
      content = (
        <div className="top">
          <div className="multi">
            <MDBBtn
              onClick={this.uploadCsv}
              color="info"
              size="m"
              className="searchButton"
            >
              Upload File
          </MDBBtn>
            <MDBBtn
              onClick={this.uploadImage}
              color="info"
              size="m"
              className="searchButton"
            >
              Upload Image
        </MDBBtn>
          </div>
          <div className="multi">

            <MDBBtn
              onClick={this.uploadVideo}
              color="info"
              size="m"
              className="searchButton"
            >
              Upload Video
        </MDBBtn>
            <MDBBtn
              onClick={this.showUploadedFiles}
              color="info"
              size="m"
              className="searchButton"
            >
              Show Uploaded Files
        </MDBBtn>
          </div>
          <div className="multi">

            <MDBBtn
              onClick={this.showUploadedImages}
              color="info"
              size="m"
              className="searchButton"
            >
              Show Uploaded Images
        </MDBBtn>
            <MDBBtn
              onClick={this.showUploadedVideos}
              color="info"
              size="m"
              className="searchButton"
            >
              Show Uploaded Videos
        </MDBBtn>
          </div>
          <div className="multi">
            <SignOut></SignOut>
          </div>
        </div>
      );
    }
    return (
      <div className="centreContent" id="home">
      <div>
        <SearchContent></SearchContent>
      </div>
        {content}
      </div>
    );
  }
}

export default Home;
