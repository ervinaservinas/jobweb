import React, {useState} from 'react';
import {render} from "react-dom";

const Cart = () => {
    const [getNum, setNum] = useState(0)

    function getRandomItem() {

        console.log('1323436456345')

    }


    return (
        <div className="carouselBox d-flex1 center">
            Change your characters equipment
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgp1.wac.edgecastcdn.net%2F802892%2Fhttp_public_production%2Fartists%2Fimages%2F2447327%2Foriginal%2Fhash%3A1467303459%2F1330617573_stickman.jpg%3F1467303459&f=1&nofb=1"/>
            <button onClick={getRandomItem}>Apply new items</button>


        </div>
    );
};

export default Cart;