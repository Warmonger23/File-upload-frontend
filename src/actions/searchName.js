import axios from "axios";

let search = function(data, callback) {
  axios({
    url: "http://localhost:3020/search",
    method: "get",
    headers: {
        "name": data
    }
  }).then(res => {
    console.log("Inside CB", res.data);
    
    callback(res.data);
  }).catch(err => {
    alert(err);
  });
};

export default search;
