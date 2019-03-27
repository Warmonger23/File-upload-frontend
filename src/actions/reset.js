import axios from "axios";

let reset = function (data) {
    return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: `http://localhost:3020/reset`,
            headers: {},
            data: data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};


export default reset;
