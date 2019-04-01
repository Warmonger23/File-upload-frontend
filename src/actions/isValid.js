import axios from "axios";

let isValid = function () {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: `http://localhost:3020/validUser`,
            withCredentials: true
        }).then(res => {
            if (res.data.data === "User is authorized")
                resolve(res);
            else reject(res);
        }).catch(err => {
            console.log("THis is inside isValid error", err);
            reject(err);
        });
    });
};
export default isValid;
