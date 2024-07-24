import React, { useContext } from 'react';

///styles
import styles from "../Styles/ShopCart.module.css"

///components
import Cart from './shared/Cart';

///Context
import { cartContext } from '../Context/ContextProvider';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const ShopCart = () => {

    const {state, dispatch} = useContext(cartContext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemCounter > 0 && <div className={styles.payment}>
                    <p><span>Total Items:</span> {state.itemCounter}</p>
                    <p><span>Total Payment:</span> {state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type:"CHECKOUT"})}>Check Out</button>
                        <button className={styles.checkout} onClick={() => dispatch({type:"CLEAR"})}>clear</button>
                    </div>
                </div>
            }
            {
                state.itemCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;