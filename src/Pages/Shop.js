import React from 'react';
import ShopView from "../Context/ShopView";
import InventoryView from "../components/InventoryView";


const Shop = () => {
    return (
        <div className="d-flex">
            <ShopView/>
            <InventoryView/>
        </div>
    );
};

export default Shop;