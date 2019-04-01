import React, { Component } from "react";
import uploadcsv from "../actions/uploadCsv";
import "../style/find.css";
import { MDBBtn } from "mdbreact";
import isValid from "../actions/isValid";

class UploadCsv extends Component {

  componentWillMount() {
    isValid().then().catch(err => {
      alert("You haven't logged in, please log in first or sign up!");
      this.props.history.push("/");
    });
  }

  constructor() {
    super();
    this.state = {
      csvfile: null,
      input: "Name file",
      searchedResult: null,
      loggedIn: false
    };
    this.importCSV = this.importCSV.bind(this);
  }

  handleChange = event => {
    console.log(event.target.files);
    this.setState({
      csvfile: event.target.files
    });
  };

  importCSV = event => {
    console.log("Inside importCsv", event.target.value);
    
    const { csvfile } = this.state;
    uploadcsv(csvfile).then((res) => {
      alert("Upload successful");
      console.log("Data from the backend", res);
      this.setState({
        csvfile: null,
        search: "",
        input: ""
      }
      );
    });
  };

  textUpdate(event) {
    let name = event.target.value;
    console.log("Name curr", name);
    this.setState({
      searchText: name,
      searchedResult: null
    });
  }

  render() {
    let contentShow;
    contentShow = (
      <div className="content">
        <h4 className="enterText">Please upload a file.</h4>
        <input
          className="input"
          type="file"
          key={this.state.input || ""}
          onChange={this.handleChange}
          multiple
          accept=".csv"
        />
        <br />
        <br />
        <MDBBtn onClick={this.importCSV} color="info">
          Upload!
          </MDBBtn>
      </div>
    );
    return <div>{contentShow}</div>;
  }
}

export default UploadCsv;
