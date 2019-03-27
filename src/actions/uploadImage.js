import axios from "axios";

let uploadImage = function (data) {
  return new Promise((resolve, reject) => {
    console.log("YO", data);

    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append("file" + i, data[i]);
    }
    axios({
      method: "post",
      url: `http://localhost:3020/image`,
      headers: {},
      data: formData
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
export default uploadImage;
