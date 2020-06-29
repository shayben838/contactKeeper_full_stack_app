import axios from "axios";

// const fetcher = axios.create({
//   baseURL: "https://contact-keeper-838.herokuapp.com/",
//   withCredentials: true,
// });

// export default fetcher;

// LOCAL
const fetcher = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default fetcher;
