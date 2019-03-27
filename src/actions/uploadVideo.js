import axios from "axios";

let uploadVideo = (data) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        for (let i = 0; i < data.length; i++) {
            formData.append("video" + i, data[i]);
        }
        axios({
            method: "post",
            url: `http://localhost:3020/video`,
            headers: {},
            data: formData,
            onUploadProgress: progressEvent => console.log(progressEvent.loaded)
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}


export default uploadVideo;