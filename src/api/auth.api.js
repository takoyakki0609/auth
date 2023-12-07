import axios from "axios";

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

const authAPI = {
  logIn: async ({ id, password }) => {
    const response = await instance.post("/login", { id, password });
    console.log(response);
    return response;
  },
};

export default authAPI;
