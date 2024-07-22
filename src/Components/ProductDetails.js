import React, { useContext } from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

///context
import { ProductsContext } from '../App';


const ProductDetails = (props) => {

    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, discription, price, category} = product;

    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{discription}</p>
                <p><span>category : </span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;