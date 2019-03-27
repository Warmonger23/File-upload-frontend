import axios from "axios";
// axios.defaults.withCredentials = true;
let signIn = function (data) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `http://localhost:3020/signIn`,
      headers: {},
      data: data,
      withCredentials: true
    }).then(res => {
      //   alert(res.data);
      resolve(res);
    }).catch(err => {
      console.log("Err from the backend", err);
      reject(err);
    });
  });
};

// let signIn = function (data) {
//   return new Promise((resolve, reject) => {
//     fetch("http://localhost:3020/signIn", {
//       method: "post",
//       credentials: "include",
//       body: JSON.stringify(data),
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     }).then(resolve)
//       .catch(reject);
//   })
// }

export default signIn;
