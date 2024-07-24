import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

///styles
import styles from "../../Styles/Product.module.css"

///functions
import { shorten } from "../../helpers/Functions";
import { isInCart } from "../../helpers/Functions";
import { quantityCount } from "../../helpers/Functions";

///context
import { cartContext } from "../../Context/ContextProvider";

///ICONS
import trashIcon from "../../Asset/trash-can-svgrepo-com.svg"



const Product = ({ productData }) => {

  const {state, dispatch} =  useContext(cartContext);

  return (
    <div className={styles.container}>
      {productData ? <img className={styles.cardImage} src={productData.image} alt="product"/> : null}
      {productData ? <h3>{shorten(productData.title) }</h3> : null}
      {productData ? <p>{productData.price}</p> : null}   
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Detail</Link>
        <div className={styles.buttonContainer}>
          {
          quantityCount(state,productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="Icons" /></button> 
          }

          {
          quantityCount(state, productData.id) > 1 && <button className={styles.smallButton}  onClick={() => dispatch({type:"DECRAESE", payload: productData})} >-</button>
          }
          {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}

          
          {
          isInCart(state,productData.id) ? <button className={styles.smallButton} onClick={()=> dispatch({type:"INCREASE", payload: productData})} >+</button> : <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>ADD to Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
