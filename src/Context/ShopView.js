import {useContext} from 'react';
import MainContext from "../context/MainContext";
const armor = [
    {
        name: "Deathmantle Helm",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_helmet_58.jpg",
        color: "#7F2CBF",
        slot: "head",
        armor: 14,
        id: "1",
        type: "A",
        gold: 3500
    },
    {
        name: "Deathmantle Handguards",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_gauntlets_28.jpg",
        color: "#7F2CBF",
        slot: "hands",
        armor: 12,
        id: "2",
        type: "A",
        gold: 3000

    },
    {
        name: "Deathmantle Chestguard",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_chest_plate02.jpg",
        color: "#7F2CBF",
        slot: "chest",
        armor: 19,
        id:"3",
        type: "A",
        gold: 3400
    },
    {
        name: "Deathmantle Legguards",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_pants_plate_05.jpg",
        color: "#7F2CBF",
        slot: "legs",
        armor: 16,
        id:"4",
        type: "A",
        gold: 3000
    },
    {
        name: "Deathmantle Shoulderpads",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_shoulder_29.jpg",
        color: "#7F2CBF",
        slot: "shoulders",
        armor: 20,
        id:"5",
        type: "A",
        gold: 4000
    },
    {
        name: "Shadowcraft Cap",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_helmet_41.jpg",
        color: "#0070dd",
        slot: "head",
        armor: 10,
        id:"6",
        type: "B",
        gold: 1800
    },
    {
        name: "Shadowcraft Gloves",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_gauntlets_24.jpg",
        color: "#0070dd",
        slot: "hands",
        armor: 8,
        id:"7",
        type: "B",
        gold: 1500
    },
    {
        name: "Shadowcraft Tunic",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_chest_leather_07.jpg",
        color: "#0070dd",
        slot: "chest",
        armor: 15,
        id:"8",
        type: "B",
        gold: 2000
    },
    {
        name: "Shadowcraft Pants",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_pants_02.jpg",
        color: "#0070dd",
        slot: "legs",
        armor: 12,
        id:"9",
        type: "B",
        gold: 1500
    },
    {
        name: "Shadowcraft Spaulders",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_shoulder_07.jpg",
        color: "#0070dd",
        slot: "shoulders",
        armor: 15,
        id:"10",
        type: "B",
        gold: 2200
    },
    {
        name: "Silk Cowl",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_helmet_08.jpg",
        color: "#1eff00",
        slot: "head",
        armor: 8,
        id:"11",
        type: "C",
        gold: 500
    },
    {
        name: "Silk Handguards",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_gauntlets_19.jpg",
        color: "#1eff00",
        slot: "hands",
        armor: 6,
        id:"12",
        type: "C",
        gold: 300
    },
    {
        name: "Silk Raiment",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_chest_leather_01.jpg",
        color: "#1eff00",
        slot: "chest",
        armor: 10,
        id:"13",
        type: "C",
        gold: 550
    },
    {
        name: "Silk Trousers",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_chest_leather_01.jpg",
        color: "#1eff00",
        slot: "legs",
        armor: 8,
        id:"14",
        type: "C",
        gold: 450
    },
    {
        name: "Silk Amice",
        img: "https://tbc-twinhead.twinstar.cz/images/icons/wotlk/large/inv_shoulder_19.jpg",
        color: "#1eff00",
        slot: "shoulders",
        armor: 9,
        id:"15",
        type: "C",
        gold: 470
    }

]


const ShopView = () => {
    const {getInventory, setInventory} = useContext(MainContext)

    function itemClicked(item) {
        setInventory([...getInventory, item])
    }

    return (
        <div className="grow1 d-flex wrap p-20">

            {armor.map((x, i) => <div key={i} onClick={() => itemClicked(x)} className="item d-flex column">
                <img src={x.img} alt=""/>
                <div>{x.name}</div>
                <div>Price: {x.gold}</div>
                <div className="color" style={{backgroundColor: x.color}}/>
            </div> )}

        </div>
    );
};

export default ShopView;