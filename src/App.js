///Components
import Store from "./Components/Store";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Components/shared/Navbar";
import ShopCart from "./Components/ShopCart";

///Context
import { getProducts } from "./Services/api";
import ContextProvider from "./Context/ContextProvider";

///Route
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProductDetails from "./Components/ProductDetails";
export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      await getProducts()
        .then((res) => {
          setProducts(res);
        })
        .catch(() => console.warn("fd"));
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <ContextProvider>
        <Navbar />
          <Switch>
          <Route path="/products/:id" component={ProductDetails } />
          <Route path="/products/" component={Store} />
          <Route path="/Cart/" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
        {/* <Store/>  */}
      </ContextProvider>
    </ProductsContext.Provider>
 
  );
}

export default App;
