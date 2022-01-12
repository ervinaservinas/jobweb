import React from 'react';
import InventoryView from "../components/InventoryView";
import EquipmentView from "../components/EquipmentView";

const Inventory = () => {
    return (
        <div className="d-flex">
            <InventoryView/>
            <EquipmentView/>
        </div>
    );
};

export default Inventory;