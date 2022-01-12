import './App.css';
import {useState, useEffect} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainContext from "./components/MainContext";
import Shop from "./Pages/Shop";
import Inventory from "./Pages/inventory";
import Toolbar from "./components/Toolbar";

function App() {


    const [getInventory, setInventory] = useState([])
    const [getEquipment, setEquipment] = useState({
        head: null,
        shoulders: null,
        chest: null,
        hands: null,
        legs: null
    })

    useEffect(() => {
        console.log('changed')
    }, [getInventory])

    return (
        <MainContext.Provider value={{
            getInventory,
            setInventory,
            getEquipment,
            setEquipment
        }}>

            <BrowserRouter>
                <Toolbar/>

                <Routes>

                    <Route path="/" element={<Inventory/>}/>
                    <Route path="/shop" element={<Shop/>}/>

                </Routes>
            </BrowserRouter>

        </MainContext.Provider>
    );
}

export default App;
