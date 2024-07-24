import React, { useContext } from "react";

///styles
import styles from "../../src/Styles/Store.module.css"

///components
import Product from "./shared/Product";
import { ProductsContext } from "../App";




const Store = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
