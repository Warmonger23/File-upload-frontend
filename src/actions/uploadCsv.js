import axios from "axios";

let uploadcsv = function (data) {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      console.log("CSV = ", data[i]);
      let key = "csv" + i;
      formData.append(key, data[i]);
    }
    console.log("Form adta", formData);
    axios({
      url: `http://localhost:3020/file`,
      method: "post",
      headers: {},
      data: formData,
      withCredentials: true
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
export default uploadcsv;
