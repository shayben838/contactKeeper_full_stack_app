import axios from "axios";
// Production
const fetcher = axios.create({
  baseURL: "https://guarded-springs-33884.herokuapp.com",
  withCredentials: true,
});

export default fetcher;

// LOCAL
// const fetcher = axios.create({
//   baseURL: "http://localhost:5000",
//   withCredentials: true,
// });

// export default fetcher;
