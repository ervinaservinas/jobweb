import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="d-flex p-20">
            <div>
                <Link to="/shop">Go to Shop</Link>
            </div>
            <div>
                <Link to="/">Go to Inventory</Link>
            </div>
        </div>
    );
};

export default Toolbar;