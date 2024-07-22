import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

///Asset
import shpIcons from "../../Asset/shopping-basket-svgrepo-com.svg"


///Context
import { cartContext } from '../../Context/ContextProvider';

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div>
            <div>
                <Link to="/products">products</Link>
                <div>
                   <Link to="/Cart"><img src={shpIcons} alt='Icons' style={{width: "20px"}}/></Link> 
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;