import {useContext} from 'react';

import MainContext from "./MainContext";


const InventoryView = () => {
    const {getInventory, setInventory, getEquipment, setEquipment} = useContext(MainContext)


    function addToInventory(item) {
        console.log(item)
        setInventory([...getInventory, item])
    }

    function removeFromInventory(item) {
        const filtered = getInventory.filter(x => x.id !== item.id)
        setInventory([...filtered])
    }


    function equipItem(item) {
        if(getEquipment[item.slot]) {

            const itemFromEquip = getEquipment[item.slot]
            addToInventory(itemFromEquip)

            const equip = {...getEquipment}
            equip[item.slot] = item
            setEquipment(equip)

            removeFromInventory(item)

        } else {
            const equip = {...getEquipment}
            equip[item.slot] = item
            setEquipment(equip)
            removeFromInventory(item)
        }
    }


    return (
        <div className="grow1">
            <div className="grow1 d-flex wrap p-20">
                {getInventory.map((x, i) => <div key={i} onClick={() => equipItem(x)} className="item d-flex column">
                    <img src={x.img} alt=""/>
                    <div>{x.name}</div>
                    <div>Price: {x.gold}</div>
                    <div className="color" style={{backgroundColor: x.color}}/>
                </div> )}
            </div>


        </div>
    );
};

export default InventoryView;