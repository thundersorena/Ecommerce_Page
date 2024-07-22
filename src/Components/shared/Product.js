import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


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
    <div>
      {productData ? <img src={productData.image} alt="product" style={{width: "200px"}}/> : null}
      {productData ? <h3>{shorten(productData.title) }</h3> : null}
      {productData ? <p>{productData.price}</p> : null}   
      <div>
        <Link to={`/products/${productData.id}`}>Detailes</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})} style={{width: "15px", height:"18px"}}>-</button>}
          {quantityCount(state,productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="Icons" style={{width: "15px", height:"15px"}} /></button> }
          {
          isInCart(state,productData.id) ? <button onClick={()=> dispatch({type:"INCREASE", payload: productData})} style={{width: "15px", height:"18px"}}>+</button> : <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>ADD to Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
