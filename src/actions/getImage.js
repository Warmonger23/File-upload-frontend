import axios from "axios";

let getImage = function () {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: `http://localhost:3020/image/listall`,
            headers: {
            },
            withCredentials: true
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
};
export default getImage;