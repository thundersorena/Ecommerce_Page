import React, { useContext } from 'react';

///styles
import styles from "../../Styles/Cart.module.css"


///context
import { cartContext } from '../../Context/ContextProvider';

///functions 
import { shorten } from '../../helpers/Functions';

///Icons
import trashIcon from "../../Asset/trash-can-svgrepo-com.svg"



const Cart = (props) => {

    const {dispatch} = useContext(cartContext);
    const {image, title, price, quantity} = props.data

    return (
        <div className={styles.Container}>
            <img className={styles.productImage} src={image} alt='product'/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> : <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} ><img src={trashIcon} alt='Icons'/></button>
                }
                <button onClick={() => dispatch({type:"INCREASE", payload: props.data })}>+</button>
            </div>
        </div>
    );
};

export default Cart;