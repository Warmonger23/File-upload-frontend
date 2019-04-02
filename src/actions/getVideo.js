import axios from "axios";
// axios.defaults.withCredentials = true;

let getVideo = function () {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: `http://localhost:3020/video/listall`,
            headers: {
            },
            withCredentials: true
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            console.log("THis is inside getvideo error", err);
            reject(err);
        });
    });
};
export default getVideo;