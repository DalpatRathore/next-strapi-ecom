import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getLatestProducts = () =>
  axiosClient
    .get("/products")
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching latest products:", error);
      throw error; // Re-throw the error to propagate it
    });

export { getLatestProducts };
