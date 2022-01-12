import React from 'react';


const Inventory = () => {
    const itemsSgrade1 = [
        {
            image: "https://lineage.pmfun.com/data/img/armor_t88_u_i00_0.png",
            title: "Imperial Crusader Breastplate",
            price: 35.38
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t88_l_i00_0.png",
            title: "Imperial Crusader Gaiters",
            price: 19.99
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
            title: "Imperial Crusader Helmet",
            price: 55
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t88_g_i00_0.png",
            title: "Imperial Crusader Gauntlets",
            price: 128
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t88_b_i00_0.png",
            title: "Imperial Crusader Boots",
            price: 88.25
        },
        {
            image: "https://lineage.pmfun.com/data/img/shield_imperial_crusader_shield_i00_0.png",
            title: "Imperial Crusader Shield",
            price: 88.25
        }]
    const itemsSgrade2 = [
        {
            image: "https://lineage.pmfun.com/data/img/armor_t89_ul_i00_0.png",
            title: "Draconic Leather Armor",
            price: 35.38
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
            title: "Draconic Leather Helmet",
            price: 35.38
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t89_g_i00_0.png",
            title: " Draconic Leather Gloves",
            price: 35.38
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t89_b_i00_0.png",
            title: " Draconic Leather Boots",
            price: 35.38
        }
    ]
    const itemsSgrade3 = [
        {
            image: "https://lineage.pmfun.com/data/img/armor_t90_ul_i00_0.png",
            title: "Major Arcana Robe",
            price: 50
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
            title: "Major Arcana Circlet",
            price: 90
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t90_g_i00_0.png",
            title: " Major Arcana Gloves",
            price: 123
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t90_b_i00_0.png",
            title: " Major Arcana Boots",
            price: 321
        }
    ]
    const itemAgrade2 = [
        {
            image: "https://lineage.pmfun.com/data/img/armor_t83_ul_i00_0.png",
            title: " Majestic Plate Armor",
            price: 21
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t83_g_i00_0.png",
            title: " Majestic Gauntlets - Heavy Armor",
            price: 31
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t90_b_i00_0.png",
            title: "Majestic Boots - Heavy Armor",
            price: 12
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
            title: "Sealed Majestic Plate Armor",
            price: 45
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t83_ul_i02_0.png",
            title: " Sealed Majestic Gauntlets",
            price: 69
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_t83_b_i02_0.png",
            title: "Sealed Majestic Boots",
            price: 54
        },
        {
            image: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i02_0.png",
            title: "Sealed Majestic Circlet",
            price: 23
        },

    ]


    return (
        <div>
            <div className="center">
                <h1 className="textColor">Imperial Crusader
                    Heavy Armor Set</h1>
            </div>
            <div className="flex-wrap d-flex">

                {itemsSgrade1.map((x, index) => <div key={index} className="card">
                    <img className="img" src={x.image} alt=""/>
                    <h2>{x.title}</h2>
                    <h3>{x.price}</h3>
                    <button className="btn">Add To Cart</button>

                </div>)}
            </div>
            <div className="center">
                <h1  className="textColor">Draconic Leather
                    Light Armor Sett</h1>
            </div>
            <div className="flex-wrap d-flex">

                {itemsSgrade2.map((x, index) => <div key={index} className="card">
                    <img className="img" src={x.image} alt=""/>
                    <h2>{x.title}</h2>
                    <h3>{x.price}</h3>
                    <button className="btn">Add To Cart</button>
                </div>)}
            </div>

            <div className="center">
                <h1  className="textColor">Major Arcana
                    Robe Set</h1>
            </div>
            <div className="flex-wrap d-flex">


                {itemsSgrade3.map((x, index) => <div key={index} className="card ">
                    <img className="img" src={x.image} alt=""/>
                    <h2>{x.title}</h2>
                    <h3>{x.price}</h3>
                    <button className="btn">Add To Cart</button>
                </div>)}


            </div>
            <div className="center">
                <h1  className="textColor">Majestic Heavy Set</h1>
            </div>
            <div className="flex-wrap d-flex">


                {itemAgrade2.map((x, index) => <div key={index} className="card ">
                    <img className="img" src={x.image} alt=""/>
                    <h2>{x.title}</h2>
                    <h3>{x.price}</h3>
                    <button className="btn">Add To Cart</button>
                </div>)}


            </div>
        </div>
    );
};

export default Inventory;