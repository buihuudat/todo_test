import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";
const configAxios = axios.create({
  baseURL,
});

configAxios.interceptors.request.use(
  async (config) => {
    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
  (e) => {
    return Promise.reject(e);
  }
);
configAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default configAxios;
