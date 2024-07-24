import React, { useContext } from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

///styles
import styles from "../Styles/ProductDetails.module.css"

///context
import { ProductsContext } from '../App';


const ProductDetails = (props) => {

    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, discription, price, category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product' />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{discription}</p>
                <p className={styles.category}><span>category : </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;