import {useContext} from 'react';
import MainContext from "./MainContext";

const EquipmentView = () => {
    const {getEquipment, setEquipment} = useContext(MainContext)


    return (
        <div className="grow1 d-flex">
            <div className="charWrapper">
                <img className="char" src="https://img.search.brave.com/DrDGQUkf9uUcYHoSOfu_0nLxb86fOnrMwGAVxgvT1iM/fit/1024/1024/ce/1/aHR0cDovL3d3dy5p/dm9yeS10b3dlci5k/ZS9IdW1hbkZpZ2h0/ZXJfTWFsZS9mcm9u/dF9oZWF2eV9keW5h/c3R5X2hpZ2gucG5n" alt=""/>


                <div className="slot headSlot">
                    {getEquipment.head && <img src={getEquipment.head.img} alt=""/>}
                </div>
                <div className="slot shoulderSlot">
                    {getEquipment.shoulders && <img src={getEquipment.shoulders.img} alt=""/>}
                </div>
                <div className="slot chestSlot">
                    {getEquipment.chest && <img src={getEquipment.chest.img} alt=""/>}
                </div>
                <div className="slot handsSlot">
                    {getEquipment.hands && <img src={getEquipment.hands.img} alt=""/>}
                </div>
                <div className="slot legsSlot">
                    {getEquipment.legs && <img src={getEquipment.legs.img} alt=""/>}
                </div>
            </div>
        </div>
    );
};

export default EquipmentView;