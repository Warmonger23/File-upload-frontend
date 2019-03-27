import axios from "axios";

let uploadcsv = function (data) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      console.log("CSV = ", data[i]);
      formData.append("csv" + i, data[i]);
    }
    console.log("Form adta", formData[0]);
    axios({
      method: "post",
      url: `http://localhost:3020/file`,
      headers: {},
      data: formData
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
export default uploadcsv;
