import axios from "axios";

// const BASE_URL = "https://fakestoreapi.com";

// const getProducts = async () =>{
//     const response = await axios.get(`${BASE_URL}/products`);
//      return response.data;
// }

async function getProducts() {
  const res = await axios.get(`https://fakestoreapi.com/products/`);
  return res.data;
}

export { getProducts };
