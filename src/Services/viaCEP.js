import axios from "axios";

const viaCEP = axios.create({
  baseURL: "http://viacep.com.br/ws/",
});

export default viaCEP;