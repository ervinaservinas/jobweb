import {Link} from "react-router-dom";
import Blogs from "./Blogs";
import React, {useState} from "react";
import Inventory from "./inventory";
import Toolbar from "../componets/Toolbar";

const Shop = () => {



    return (
        <div>
<h2>welcome to character customusiaartion</h2>
            <div className="toolbar">
                <Toolbar/>

            </div>
            <div>


            </div>
            <Link to="/inventory">
                <div className="btn">Inventory</div>
            </Link>

            <Link to="/character">
                <div className="btn"> Character item equipment</div>
            </Link>


            </div>

    );
};

export default Shop;