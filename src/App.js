import './App.css';
import Shop from "./pages/Shop";
import Inventory from "./pages/inventory"
import Cart from "./pages/Cart";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react";
import MainContext from "./Context/MainContext";


function App() {



    return (

        <div>
sdf
            <BrowserRouter>
                <div className="d-flex">

                    <div className="grow1">
                        <toolbar/>
                        <Routes>
                            <Route path="/home" element={<Shop/>}>
                            </Route>
                            <Route path="/inventory" element={<Inventory/>}>
                            </Route>
                            <Route path="/character" element={<Cart/>}>
                            </Route>

                        </Routes>
                    </div>

                </div>

            </BrowserRouter>
        </div>
    );
}


export default App;
