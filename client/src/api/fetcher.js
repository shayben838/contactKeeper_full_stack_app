import axios from "axios";
// Production
const fetcher = axios.create({
  baseURL: "https://cv-tracker-v1.herokuapp.com",
  withCredentials: true,
});

// export default fetcher;

// LOCAL
// const fetcher = axios.create({
//   baseURL: "http://localhost:5000",
//   withCredentials: true,
// });

export default fetcher;
