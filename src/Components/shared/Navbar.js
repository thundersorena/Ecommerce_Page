import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

///styles
import styles from "../../Styles/Navbar.module.css"

///Asset
import shopIcons from "../../Asset/shopping-basket-svgrepo-com.svg"


///Context
import { cartContext } from '../../Context/ContextProvider';

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products" >products</Link>
                <div className={styles.iconContainer}>
                   <Link to="/Cart"><img src={shopIcons} alt='Icons' style={{width: "20px"}}/></Link> 
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;