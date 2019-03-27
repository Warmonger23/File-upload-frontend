import React, { Component } from "react";
import uploadImage from "../actions/uploadImage";
import "../style/find.css";
import { MDBBtn } from "mdbreact";
import isValid from "../actions/isValid";

class UploadImage extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            input: "Name file",
            searchedResult: null,
            showloader: false
        };
        this.importImage = this.importImage.bind(this);
    }

    componentWillMount() {
        isValid().then().catch(err => {
            alert("You haven't logged in, please log in first or sign up!");
            this.props.history.push("/");
        });
    }

    handleChange = event => {
        console.log(event.target.files);
        this.setState({
            image: event.target.files
        });
    };

    importImage = event => {
        console.log("Inside importImage", event.target.value);

        const { image } = this.state;
        if (!image) {
            alert("Please select an image to upload");
            return;
        }
        this.setState({ showloader: true });
        uploadImage(image).then((res) => {
            alert("Upload successful");
            console.log("Data from the backend", res);
            this.setState({
                image: null,
                search: "",
                input: "",
                showloader: false
            });
        });
    };

    render() {
        let content;
        if (!this.state.showloader) {
            content = (
                <div className="content">
                    <h4 className="enterText">Please upload an image.</h4>
                    <input
                        className="input"
                        type="file"
                        key={this.state.input || ""}
                        onChange={this.handleChange}
                        accept="image/*"
                        multiple
                    />
                    <br />
                    <br />
                    <MDBBtn onClick={this.importImage} color="info">
                        Upload!
                </MDBBtn>
                </div>
            );
        }
        else {
            content = <div className="loader"></div>
        }
        return <div>{content}</div>;
    }
}

export default UploadImage;
