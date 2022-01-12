import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Toolbar = () => {
    return (
        <div >

            <button className="btn">home</button>
            <button className="btn">cart</button>
            <button className="btn">shop</button>
            <button className="btn">character</button>

        </div>
    );
};

export default Toolbar;