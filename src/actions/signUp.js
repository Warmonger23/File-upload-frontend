import axios from "axios";

let signIn = function (data) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `http://localhost:3020/signUp`,
      headers: {},
      data: data,
      withCredentials: true
    }).then(res => {
      //   alert(res.data);
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

export default signIn;
